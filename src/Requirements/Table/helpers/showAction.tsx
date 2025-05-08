import { Td,Stack } from "@inubekit/inubekit";
import { IAction, IActions } from "../props";

interface IShowAction {
  actionContent: IAction[];
  entry: IActions;
  onActionClick?: (actionId: string, entry: IActions) => void;
  responsive?: boolean;
}

const ShowAction = (props: IShowAction) => {
  const { actionContent, entry, onActionClick, responsive = false } = props;
  return (
    <>
      {actionContent.map((action) => {
        const isDisabled = typeof action.disabled === "function"
          ? action.disabled(entry)
          : action.disabled;
        const handleClick = isDisabled ? () => { } : onActionClick;
        return (
          !responsive ?
            <Td key={`${entry.id}-${action.id}`} type="custom">
              {action.content && (
                action.content(
                  entry,
                  handleClick!
                )
              )}
            </Td> :
            <Stack key={`${entry.id}-${action.id}`}>
            {action.content && (
              action.content(
                entry,
                handleClick!
              )
            )}
            </Stack>
        );
      })}
    </>
  );
}

export { ShowAction };
