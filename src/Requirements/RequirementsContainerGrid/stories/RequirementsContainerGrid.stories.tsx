import { Meta, StoryObj } from "@storybook/react";
import { RequirementsContainerGrid } from "..";
import { IUnfulfilledRequirement } from "../../UnfulfilledRequirement";

type Story = StoryObj<typeof RequirementsContainerGrid>;

const meta: Meta<typeof RequirementsContainerGrid> = {
  component: RequirementsContainerGrid,
  title: "components/alerts/RequirementsContainerGrid",
  parameters: {
    docs: {
      description: {
        component:
          "Grid container displaying a list of unfulfilled requirements.",
      },
    },
  },
  argTypes: {
    requirements: {
      control: {
        type: "object",
      },
      description: "Array of unfulfilled requirements to display in the grid.",
    },
    isMobile: {
      control: {
        type: "boolean",
      },
      description: "Determines if the layout is optimized for mobile devices.",
    },
  },
};

export const Default: Story = {
  args: {
    requirements: [
      {
        title: "Alerta 1",
        requirement: "Estar al día en las obligaciones.",
        causeNonCompliance: "El cliente tiene en mora el crédito de vivienda.",
      },
      {
        title: "Alerta 2",
        requirement: "Requiere 90 días de antigüedad.",
        causeNonCompliance: "El cliente tiene solo 60 días de afiliación.",
      },
    ] as IUnfulfilledRequirement[],
    isMobile: false,
  },
};

export default meta;
