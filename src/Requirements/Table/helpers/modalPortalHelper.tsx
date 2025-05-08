import { DetailsModal } from "../../Modals/DetailsModal";
import { IActions } from "../props";
import { ApprovalsModal } from "../../Modals/ApprovalsModal";
import { StyledModalContainer } from "../styles";
import { Blanket } from "@inubekit/inubekit";

interface IModalPortalHelper {
    openDetailsModal: boolean;
    openApprovalsModal: boolean;
    modalData: IActions | null;
    onCloseDetailsModal: () => void;
    onCloseApprovalsModal: () => void;
    onClickApprovalsModal: () => void;
}

const renderModals = (props: IModalPortalHelper) => {
    const { openDetailsModal,
        openApprovalsModal,
        modalData,
        onCloseDetailsModal,
        onCloseApprovalsModal,
        onClickApprovalsModal } = props;
    return (
        <Blanket>
            <StyledModalContainer
                onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}>
                {openDetailsModal && modalData && (
                    <DetailsModal
                        rowData={modalData}
                        onClose={onCloseDetailsModal} />
                )}

                {openApprovalsModal && modalData && (
                    <ApprovalsModal
                        rowData={modalData}
                        onClose={onCloseApprovalsModal}
                        onClick={onClickApprovalsModal} />
                )}
            </StyledModalContainer>
        </Blanket>
    );
}

export { renderModals };