interface IEntries {
  currentPage: number;
  pageLength: number;
  totalLength: number
}

const paginateEntries = (props: IEntries) => {
  const { currentPage, pageLength, totalLength } = props;
  const firstEntryInPage = (currentPage - 1) * pageLength;
  const lastEntryInPage = Math.min(
    firstEntryInPage + pageLength,
    totalLength
  );

  return { firstEntryInPage, lastEntryInPage };
}

export { paginateEntries };