import { IBreakpoint } from "./Table/props";
import { Table } from "./Table";
import { IData } from "./types";

interface IRequirements {
  id: string;
  isLoading: boolean;
  portalId: string;
  requirements: IData[];
  title: string;
  breakpoints: IBreakpoint[];
}

function Requirements(props: IRequirements) {
  const { id, isLoading, requirements, breakpoints } = props;

  return (
    <>
      {requirements.map((req) => (
        <Table
          key={req.id}
          actions={req.actionsRequirements}
          entries={req.entriesRequirements}
          id={id}
          isLoading={isLoading}
          titles={req.titlesRequirements}
          breakpoints={breakpoints}
        />
      ))}
    </>
  );
}

export type { IRequirements };
export { Requirements };
