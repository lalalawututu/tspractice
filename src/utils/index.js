//该函数为了排除值为0的有效值误删问题
export const isFalsy = (value) => (value === 0 ? false : !value);

//在一个函数里，改变传入对象是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
