import { useEffect, useState } from "react";

export function useLocalStrage(initialState, key) {
  const [data, setData] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(data));
    },
    [data, key]
  );

  return [data, setData];
}
