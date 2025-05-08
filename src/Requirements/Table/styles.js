import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

const StyledModalContainer = styled.div`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  border-radius: 8px;
  max-height: 80vh;
  overflow-y: auto;
`;

const StyledTable = styled.table`
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;

const StyledThead = styled.thead`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
`;

const StyledTbody = styled.tbody`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
`;

const StyledTr = styled.tr`

  height: 40px;

  td:nth-child(1) {
    width: ${({ $widthFirstColumn }) => $widthFirstColumn};
    box-sizing: ${({ $widthFirstColumn }) => $widthFirstColumn && "border-box"};
  }

`;

const StyledThTitle = styled.th`
  padding: 12px 16px;
`;

const StyledThAction = styled.th`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  padding: 12px 16px;
  min-width: 70px;
`;

const StyledTd = styled.td`
  padding: 0px 16px;
  max-width: 300px;
  white-space: nowrap;
`;

const StyledTdActions = styled.td`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  text-align: center;
`;

export {
  StyledModalContainer,
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledThTitle,
  StyledThAction,
  StyledTd,
  StyledTdActions,
};
