import { useEffect, useState } from "react";
//该函数为了排除值为0的有效值误删问题
export const isFalsy = (value: any) => (value === 0 ? false : !value);

//在一个函数里，改变传入对象是不好的
export const cleanObject = (object: object) => {
  const result = {
    ...object,
  };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //每次在上一个useEffect处理完以后在运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
