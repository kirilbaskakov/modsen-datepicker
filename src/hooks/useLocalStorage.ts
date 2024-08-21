import { useEffect, useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
  mapValue?: (value: T) => unknown
): [T, (value: T) => void] => {
  const getFromLocalStorage = () => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? initialValue;
    } catch {
      return initialValue;
    }
  };

  const writeToLocalStorage = (value: T) => {
    localStorage.setItem(
      key,
      JSON.stringify(mapValue ? mapValue(value) : value)
    );
  };

  const [value, setValue] = useState(getFromLocalStorage());

  useEffect(() => {
    setValue(getFromLocalStorage());
  }, [key]);

  const newSetValue = (value: T) => {
    writeToLocalStorage(value);
    setValue(value);
  };

  return [value, newSetValue];
};

export default useLocalStorage;
