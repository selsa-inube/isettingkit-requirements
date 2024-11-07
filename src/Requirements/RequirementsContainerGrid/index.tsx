import { Grid } from "@inubekit/grid";
import {
  IUnfulfilledRequirement,
  UnfulfilledRequirement,
} from "../UnfulfilledRequirement";

interface IRequirementsContainerGrid {
  requirements: IUnfulfilledRequirement[];
  isMobile?: boolean;
}

const RequirementsContainerGrid = (props: IRequirementsContainerGrid) => {
  const { requirements, isMobile } = props;
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      autoRows="minmax(150px, auto)"
      gap="28px"
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
  );
};

export { RequirementsContainerGrid };
export type { IRequirementsContainerGrid };
