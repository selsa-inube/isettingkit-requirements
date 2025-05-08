import { MdClose } from "react-icons/md";
import { Button, Divider, Stack, Text, Textarea, Toggle } from "@inubekit/inubekit";

interface IApprovalsModal {
  onClick: () => void;
  onClose: () => void;
  rowData: any;
}

const ApprovalsModal = (props: IApprovalsModal) => {
  const { onClick, onClose, rowData } = props;
  return (
    <Stack direction="column" padding="24px 12px" gap="16px">
      <Stack alignItems="center" justifyContent="space-between">
        <Text appearance="dark" type="title" size="large">Aprobaciones</Text>
        <Button appearance="dark"
          onClick={onClose}
          iconAfter={<MdClose />}
          variant="none"
          spacing="compact">Cerrar</Button>
      </Stack>
      <Divider />
      <Toggle onChange={() => { }} children="Aprobar" checked={rowData?.approved} />
      <Textarea id="approvalsObservations"
        label="Observaciones de aprobación o rechazo"
        name="approvalsObservations"
        value={rowData?.observations}
        placeholder={rowData?.observationsPlaceholder}
        fullwidth />
      <Button fullwidth onClick={onClick}>Confirmar</Button>
    </Stack>
  );
}

export { ApprovalsModal };