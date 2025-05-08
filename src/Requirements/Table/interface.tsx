import React from "react";
import { Text, Table, Tbody, Td, Th, Thead, Tr, useMediaQuery,Stack,Icon } from "@inubekit/inubekit";
import { MdInfoOutline } from "react-icons/md";

import { IAction, IActions, ITitle } from "./props";
import { dataLoading } from "./helpers/dataLoading";
import { ShowAction } from "./helpers/showAction";
import { renderRequirementsCell } from "./helpers/renderRequirementsCell";

interface IGroupedRows {
  groupName: string;
  rows: IActions[];
}

interface ITableUI {
  columns: ITitle[];
  groupedData: IGroupedRows[];
  actions?: IAction[];
  isLoading?: boolean;
  onActionClick?: (actionId: string, entry: IActions) => void;
  skipGroupHeaderName?: string;
}

const TableUI = (props: ITableUI) => {
  const {
    columns,
    groupedData,
    actions,
    isLoading,
    onActionClick,
    skipGroupHeaderName,
  } = props;

  const isMobile = useMediaQuery("(max-width: 850px)");
  const mainColumnTitle = columns[0]?.titleName || "";

  return (
    <Table>
      <Thead>
        <Tr border="bottom">
          {!isMobile ? (
            <>
              {columns.map((col, index) => {
                const styleForSecondColumn =
                  !isMobile && index === 1 ? { width: "90px" } : undefined;

                return (
                  <Th
                    key={`title-${col.id}`}
                    align="left"
                    style={styleForSecondColumn}
                  >
                    <Text
                      as="span"
                      type="label"
                      size="medium"
                      appearance="primary"
                      weight="bold"
                    >
                      {col.titleName}
                    </Text>
                  </Th>
                );
              })}
              {actions?.map((action) => (
                <Th key={action.id} align="center" style={{ width: "112px" }}>
                  <Text
                    as="span"
                    appearance="primary"
                    type="label"
                    size="medium"
                    weight="bold"
                  >
                    {action.actionName}
                  </Text>
                </Th>
              ))}
            </>
          ) : (
            <>
              <Th align="left">
                <Text
                  as="span"
                  type="label"
                  size="medium"
                  appearance="primary"
                  weight="bold"
                >
                  {mainColumnTitle}
                </Text>
              </Th>
              <Th align="center" style={{ width: "90px" }}>
                <Icon appearance="primary" icon={<MdInfoOutline />} size="18px" />
              </Th>
            </>
          )}
        </Tr>
      </Thead>

      <Tbody>
        {isLoading ? (
          dataLoading({
            titleColumns: columns,
            numberActions: actions ? actions.length : 0,
          })
        ) : (
          <>
            {groupedData.length > 0 ? (
              groupedData.map(({ groupName, rows }) => (
                <React.Fragment key={groupName}>
                  {groupName &&
                    groupName !== mainColumnTitle &&
                    groupName !== skipGroupHeaderName && (
                      <Tr border="bottom">
                        <Td
                          colSpan={
                            !isMobile
                              ? columns.length + (actions?.length || 0)
                              : 2
                          }
                          align="left"
                          type="custom"
                        >
                          <Text
                            as="span"
                            type="label"
                            size="medium"
                            appearance="primary"
                            weight="bold"
                          >
                            {groupName}
                          </Text>
                        </Td>
                      </Tr>
                    )}

                  {rows.map((entry) => (
                    <Tr key={`entry-${entry.id}`} border="bottom">
                      {!isMobile ? (
                        <>
                          {columns.map((col) => {
                            if (col.id === "requirements") {
                              return (
                                <Td
                                  key={`cell-${entry.id}-${col.id}`}
                                  align="left"
                                  type="custom"
                                >
                                  {renderRequirementsCell(
                                    entry[col.id] as string,
                                    false
                                  )}
                                </Td>
                              );
                            }
                            return (
                              <Td
                                key={`cell-${entry.id}-${col.id}`}
                                align="left"
                                type="custom"
                              >
                                <Text as="span" size="small" >
                                  {entry[col.id]}
                                </Text>
                              </Td>
                            );
                          })}

                          {actions && (
                            <ShowAction
                              actionContent={actions}
                              entry={entry}
                              onActionClick={onActionClick}
                            />
                          )}
                        </>
                      ) : (
                        <>
                          <Td align="left" type="custom">
                            <Text
                              as="span"
                              size="small"
                              textAlign="center"
                              appearance="dark"
                            >
                              {entry.systemValidations}
                            </Text>
                          </Td>
                          <Td align="center" type="custom">
                            <Stack justifyContent="center" alignItems="center" gap="8px">
                              {renderRequirementsCell(
                                entry.requirements as string,
                                true
                              )}
                              <ShowAction
                                actionContent={actions || []}
                                entry={entry}
                                onActionClick={onActionClick}
                                responsive
                              />
                            </Stack>
                          </Td>
                        </>
                      )}
                    </Tr>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <Tr border="bottom" aria-labelledby="no-data">
                <Td colSpan={isMobile ? 2 : columns.length + (actions?.length || 0)} type="custom">
                  <Text type="body" size="small" appearance="dark" ellipsis>
                    No se encontró información
                  </Text>
                </Td>
              </Tr>
            )}
          </>
        )}
      </Tbody>
    </Table>
  );
};

export { TableUI };
