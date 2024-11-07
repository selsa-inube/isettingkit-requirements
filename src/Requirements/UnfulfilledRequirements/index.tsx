import { MdWarningAmber } from "react-icons/md";

import { Divider } from "@inubekit/divider";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Fieldset } from "../Fieldset";

interface IUnfulfilledRequirements {
  title: string;
  requirement: string;
  causeNonCompliance: string;
  isMobile?: boolean;
}

const UnfulfilledRequirements = (props: IUnfulfilledRequirements) => {
  const { title, requirement, causeNonCompliance, isMobile } = props;
  return (
    <Fieldset title={title} isMobile={isMobile}>
      <Stack direction="column" gap="16px" padding="0 16px">
        <Stack direction="column" gap="4px">
          <Stack justifyContent="space-between" alignItems="center">
            <Text>{requirement}</Text>
            <Icon icon={<MdWarningAmber />} appearance="warning" size="24px" />
          </Stack>
          <Divider />
          <Text appearance="gray" size="medium" type="body">
            {requirement}
          </Text>
        </Stack>
        <Stack direction="column" gap="4px">
          <Text>{causeNonCompliance}</Text>
          <Divider />
          <Text appearance="gray" size="medium">
            {causeNonCompliance}
          </Text>
        </Stack>
      </Stack>
    </Fieldset>
  );
};

export { UnfulfilledRequirements };
export type { IUnfulfilledRequirements };
