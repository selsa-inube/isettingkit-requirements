import { Tr, Td,SkeletonLine } from "@inubekit/inubekit";
import { ITitle } from "../props";
import { actionsLoading } from "./actionsLoading";

interface IDataLoading {
  titleColumns: ITitle[];
  numberActions: number
}

const dataLoading = (props: IDataLoading) => {
  const { titleColumns, numberActions } = props;
  const rowsLoading = [];
  for (let rows = 0; rows < 4; rows++) {
    rowsLoading.push(
      <Tr key={rows}>
        {titleColumns.map((title) => (
          <Td key={`e-${title.id}`} type="custom">
            <SkeletonLine animated />
          </Td>
        ))}
        {actionsLoading(numberActions)}
      </Tr>
    );
  }
  return rowsLoading;
}

export { dataLoading };