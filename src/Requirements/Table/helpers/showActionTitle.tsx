import { Th,Text } from "@inubekit/inubekit";
import { IAction } from "../props";
import { StyledThAction } from "../styles";

interface IShowActionTitle {
  actionTitle: IAction[];
  mediaQuery: boolean;
  multipleTables: boolean;
}

const showActionTitle = (
  props: IShowActionTitle
) => {
  const { actionTitle, mediaQuery, multipleTables } = props;
  return !mediaQuery ? (
    actionTitle.map((action) => (
      <Th
        key={`action-${action.id}`}
        style={{ width: "90px", minWidth: "90px", maxWidth: "112px" }}
      >
        <Text
          as="span"
          type="label"
          size="medium"
          textAlign="center"
          appearance="primary"
          weight="bold"
        >
          {action.actionName}
        </Text>
      </Th>
    ))
  ) : (
    <StyledThAction $multipleTables={multipleTables}></StyledThAction>
  );
}

export { showActionTitle };