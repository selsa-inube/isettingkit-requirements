import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainerFieldset = styled.div`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  overflow-y: ${({ $hasOverflow }) => ($hasOverflow ? "visible" : "auto")};
  box-sizing: border-box;
  height: ${({ $height }) => $height};
  border-radius: 8px;
  border: 1px solid;
  padding-top: ${({ $hasTable }) => !$hasTable && "16px"};
  padding-bottom: ${({ $hasTable }) => !$hasTable && "16px"};
  padding-right: ${({ $hasTable }) => !$hasTable && "8px"};
  padding-left: ${({ $hasTable }) => !$hasTable && "8px"};
  padding-top: ${({ $hasTable }) => !$hasTable && "16px"};
  padding-bottom: ${({ $hasTable }) => !$hasTable && "16px"};
  padding-right: ${({ $hasTable }) => !$hasTable && "8px"};
  padding-left: ${({ $hasTable }) => !$hasTable && "8px"};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  background-color: ${({ theme, $isSelected }) =>
    !$isSelected
      ? theme?.radiofield?.background?.color?.active || inube.palette.neutral.N0
      : theme?.radiofield?.background?.color?.checked ||
        inube.palette.blue.B50};
  border-color: ${({ theme, $isSelected }) =>
    !$isSelected
      ? theme?.palette?.neutral?.N300 || inube.palette.neutral.N300
      : theme?.palette?.blue?.B300 || inube.palette.blue.B300};
  box-shadow: ${({ theme, $isSelected }) =>
    $isSelected &&
    `-12px 0px 0px ${
      theme?.radiofield?.background?.color?.checked || inube.palette.blue.B400
    }`};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  ${({ $isMobile, theme }) =>
    !$isMobile &&
    `
    &::-webkit-scrollbar {
      width: 8px; 
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${
        theme?.palette?.neutral?.N30 || inube.palette.neutral.N30
      };
      border-radius: 8px;
    }
  `}
`;

export { StyledContainerFieldset };
