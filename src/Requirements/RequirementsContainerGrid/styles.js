import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainerRequirements = styled.div`
  & > div {
    border-radius: 8px;
    border: 1px solid;
    border-color: ${({ theme }) =>
      theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  }
`;

export { StyledContainerRequirements };
