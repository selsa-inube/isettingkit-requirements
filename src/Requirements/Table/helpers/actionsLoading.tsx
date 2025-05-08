import { Td,SkeletonLine } from "@inubekit/inubekit";

const actionsLoading = (numberActions: number)=> {
  const cells = [];
  for (let i = 0; i < numberActions; i++) {
    cells.push(
      <Td key={`actionLoading-${i}`} type="custom">
        <SkeletonLine animated />
      </Td>
    );
  }
  return cells;
}

export { actionsLoading };