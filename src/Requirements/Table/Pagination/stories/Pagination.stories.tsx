import { PaginationController } from "./PaginationController";
import { Pagination } from "..";
import { props, parameters } from "../../props";
import { ITable } from "../..";

const story = {
  title: "data/Table/Pagination",
  component: Pagination,
  parameters,
  argTypes: props,
};

const Default = (args: ITable) => <PaginationController {...args} />;

Default.args = {
  entries: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  pageLength: 5,
};

export { Default };
export default story;
