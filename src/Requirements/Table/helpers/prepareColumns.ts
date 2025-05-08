import { ITitle, IBreakpoint } from "../props";

interface IPrepareColumns {
  titles: ITitle[];
  breakpoints?: IBreakpoint[];
}

const prepareColumns = (
  props: IPrepareColumns
): ITitle[] => {
  const { titles, breakpoints } = props;
  if (!breakpoints) return titles;
  return titles;
}

export { prepareColumns };