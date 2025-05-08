import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Requirements, IRequirements } from "..";
import { breakPointsMock, dataMock } from "./mock";

const meta: Meta<typeof Requirements> = {
  title: "modals/Requirements",
  component: Requirements,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IRequirements> = (args) => {
  return (
    <Requirements {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  title: "Pre-validar Requisitos",
  requirements: dataMock,
  breakpoints: breakPointsMock,
};

export default meta;
