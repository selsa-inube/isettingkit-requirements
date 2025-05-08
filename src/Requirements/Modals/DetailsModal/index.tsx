import { MdClose } from "react-icons/md";
import {Button, Stack, Text, Divider, Date, Textarea} from "@inubekit/inubekit";

interface IDetailsModal {
  onClose: () => void;
  rowData: any;
}

const DetailsModal = (props: IDetailsModal) => {
  const { onClose, rowData } = props;

  return (
    <Stack direction="column" padding="24px 12px" gap="16px">
      <Stack alignItems="center" justifyContent="space-between">
        <Text appearance="dark" type="title" size="large">Más detalles</Text>
        <Button appearance="dark" onClick={onClose} iconAfter={<MdClose />} variant="none" spacing="compact">Cerrar</Button>
      </Stack>
      <Divider />
      <Date id="detailsDate" label="Fecha de ejecución" name="detailsDate" value={rowData?.executionDate} fullwidth />
      <Textarea id="detailsObservations" label="Observaciones" name="detailsObservations" value={rowData?.observations} fullwidth />
      <Button fullwidth onClick={onClose} >Cerrar</Button>
    </Stack>
  );
}

export { DetailsModal };