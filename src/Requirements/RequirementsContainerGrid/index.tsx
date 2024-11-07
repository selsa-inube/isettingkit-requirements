import { Grid } from "@inubekit/grid";
import {
  IUnfulfilledRequirement,
  UnfulfilledRequirement,
} from "../UnfulfilledRequirement";
import { StyledContainerRequirements } from "./styles";

interface IRequirementsContainerGrid {
  requirements: IUnfulfilledRequirement[];
  isMobile?: boolean;
}

const RequirementsContainerGrid = (props: IRequirementsContainerGrid) => {
  const { requirements, isMobile } = props;
  return (
    <StyledContainerRequirements>
      <Grid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        autoRows="minmax(150px, auto)"
        gap="28px"
        padding="16px"
      >
        {requirements.map((requirement, index) => (
          <UnfulfilledRequirement
            key={index}
            title={requirement.title}
            requirement={requirement.requirement}
            causeNonCompliance={requirement.causeNonCompliance}
            isMobile={isMobile}
          />
        ))}
      </Grid>
    </StyledContainerRequirements>
  );
};

export { RequirementsContainerGrid };
export type { IRequirementsContainerGrid };
