export const minBy = <T>(
  array: T[],
  cb: (item: T) => number | string,
): T | undefined => {
  if (array.length === 0) return undefined;

  return array.reduce((acc: T, cur: T) => {
    return cb(cur) < cb(acc) ? cur : acc;
  });
};

export const maxBy = <T>(
  array: T[],
  cb: (item: T) => number | string,
): T | undefined => {
  if (array.length === 0) return undefined;

  return array.reduce((acc: T, cur: T) => {
    return cb(cur) > cb(acc) ? cur : acc;
  });
};
