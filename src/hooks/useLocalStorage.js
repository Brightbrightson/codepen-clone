import {useEffect, useState} from "react";

const PREFIX = "codepen-clone";

export default function useLocalStorage(key, initiaValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initiaValue === "function") {
      return initiaValue();
    } else {
      return initiaValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
