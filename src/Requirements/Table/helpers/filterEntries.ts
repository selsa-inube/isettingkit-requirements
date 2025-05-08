import { IActions, ITitle } from "../props";

const filterEntries =(
  entries: IActions[],
  titles: ITitle[],
  filter: string
): IActions[] => {
  if (!filter) return entries;

  const titlesId = titles.map((title) => title.id.toLowerCase());

  return entries.filter((entry) => {
    for (const attribute in entry) {
      const attributeValue = entry[attribute]?.toString().toLowerCase();
      const statusValue = entry?.[attribute]?.props?.status
        ?.toString()
        .toLowerCase();

      if (
        titlesId.includes(attribute.toLowerCase()) &&
        (attributeValue?.includes(filter.toLowerCase()) ||
          statusValue?.includes(filter.toLowerCase()))
      ) {
        return true;
      }
    }
    return false;
  });
}

export { filterEntries };