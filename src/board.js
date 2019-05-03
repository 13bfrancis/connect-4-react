export const createBoard = () => {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push([null, null, null, null, null, null, null]);
  }
  return arr;
};
//numbering works likes this rows and then columns
