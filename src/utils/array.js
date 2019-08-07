export const reorderPosition = (startIndex, targetIndex, list) => {
  const listCopy = list.map(x => x);
  listCopy.splice(targetIndex, 0, listCopy.splice(startIndex, 1)[0]);
  return listCopy;
};
