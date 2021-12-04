export const show = (arr: number[]) => {
  let newIndex = 0;
  newIndex++;
  return [...arr, newIndex];
};

export const hide = (arr: number[], item: number) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};
