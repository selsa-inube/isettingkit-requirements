import { IActions } from "../props";

/**
 * Returns an array where each item is:
 *   { groupName: string, rows: IActions[] }
 * 
 * If groupName === skipHeaderGroupName, we do NOT skip the entire group;
 * we only skip showing a sub-header for that group in the UI (the UI checks it).
 */
const groupEntries = (
  entries: IActions[],
  _skipHeaderGroupName?: string
): { groupName: string; rows: IActions[] }[] => {
  const groupsMap = new Map<string, IActions[]>();

  for (const entry of entries) {
    const groupName = (entry as any).group || "";
    if (!groupsMap.has(groupName)) {
      groupsMap.set(groupName, []);
    }
    groupsMap.get(groupName)?.push(entry);
  }

  return Array.from(groupsMap.entries()).map(([groupName, rows]) => ({
    groupName,
    rows,
  }));
}

export { groupEntries };