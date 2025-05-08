import { Icon, IIconAppearance,Stack, ITagAppearance, Tag } from "@inubekit/inubekit";
import { MdInfoOutline } from "react-icons/md";

type StatusKey = "cumple" | "no cumple" | "default";

const STATUS_MAP: Record<StatusKey, { label: string; appearance: string }> = {
  cumple: { label: "Cumple", appearance: "success" },
  "no cumple": { label: "No cumple", appearance: "danger" },
  default: { label: "Sin Evaluar", appearance: "warning" },
};

const renderRequirementsCell = (
  requirementsLabel: string,
  isMobile: boolean
) => {
  const { label, appearance } =
    STATUS_MAP[requirementsLabel.toLowerCase() as StatusKey] || STATUS_MAP.default;

  if (isMobile) {
    return <Icon appearance={appearance as IIconAppearance} icon={<MdInfoOutline />} size="16px" />;
  }

  return (
    <Stack justifyContent="center">
      <Tag label={label} appearance={appearance as ITagAppearance} />
    </Stack>
  );
};

export { renderRequirementsCell };
