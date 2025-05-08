import { useMemo, useState } from "react";
import { Stack } from "@inubekit/inubekit";
import { Pagination } from "./Pagination"; 
import { IAction, IActions, IBreakpoint, ITitle, ITypeTitle } from "./props";

import { filterEntries } from "./helpers/filterEntries";
import { paginateEntries } from "./helpers/paginateEntries";
import { groupEntries } from "./helpers/groupEntries";
import { prepareColumns } from "./helpers/prepareColumns";
import { TableUI } from "./interface";
import { renderModals } from "./helpers/modalPortalHelper";
import { createPortal } from "react-dom";

interface ITable {
  entries: IActions[];
  id: string;
  isLoading: boolean;
  titles: ITitle[];
  actions?: IAction[];
  typeTitle?: ITypeTitle;
  widthFirstColumn?: string;
  multipleTables?: boolean;
  breakpoints?: IBreakpoint[];
  filter?: string;
  infoTitle?: string;
  pageLength?: number;
  skipGroupHeaderName?: string;
}

const Table = (props: ITable) => {
  const {
    titles,
    actions,
    entries,
    filter = "",
    isLoading,
    pageLength = 40,
    breakpoints,
    skipGroupHeaderName,
  } = props;

  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openApprovalsModal, setOpenApprovalsModal] = useState(false);
  const [modalData, setModalData] = useState<IActions | null>(null);

  const handleActionClick = (actionId: string, entry: IActions) => {
    const clickedAction = actions?.find((a) => a.id === actionId);
    if (!clickedAction || (clickedAction.disabled && clickedAction.disabled(entry))) {
      return; 
    }
    setModalData(entry);
    if (actionId === "details") {
      setOpenDetailsModal(true);
    } else if (actionId === "approvals") {
      setOpenApprovalsModal(true);
    }
  };

  const filteredEntries = useMemo(() => {
    return filterEntries(entries, titles, filter);
  }, [entries, titles, filter]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredEntries.length / pageLength);
  const { firstEntryInPage, lastEntryInPage } = paginateEntries({
    currentPage,
    pageLength,
    totalLength: filteredEntries.length,
  });

  function getPageEntries() {
    return filteredEntries.slice(firstEntryInPage, lastEntryInPage);
  }

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToEndPage() {
    setCurrentPage(totalPages);
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const pageEntries = getPageEntries();
  const groupedData = useMemo(() => {
    return groupEntries(pageEntries, skipGroupHeaderName);
  }, [pageEntries]);

  const preparedColumns = useMemo(() => {
    return prepareColumns({titles, breakpoints});
  }, [titles, breakpoints]);

  return (
    <>
      <Stack direction="column">
        <TableUI
          columns={preparedColumns}
          groupedData={groupedData}
          actions={actions}
          isLoading={isLoading}
          onActionClick={handleActionClick}
        />

        {filteredEntries.length > pageLength && (
          <Pagination
            firstEntryInPage={firstEntryInPage}
            lastEntryInPage={lastEntryInPage}
            totalRecords={filteredEntries.length}
            handleStartPage={goToFirstPage}
            handlePrevPage={prevPage}
            handleNextPage={nextPage}
            handleEndPage={goToEndPage}
          />
        )}
      </Stack>

      {(openDetailsModal || openApprovalsModal) &&
       createPortal(
          renderModals({
            openDetailsModal,
            openApprovalsModal,
            onClickApprovalsModal: () => setOpenApprovalsModal(true),
            modalData,
            onCloseDetailsModal: () => setOpenDetailsModal(false),
            onCloseApprovalsModal: () => setOpenApprovalsModal(false),
          }),
          document.getElementById("requirementsPortal") as HTMLElement
        )}
    </>
  );
};

export { Table };
export type { ITable };
