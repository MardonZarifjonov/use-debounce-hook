import { useRef } from 'react';

export function useDebounceCallback(delay = 1000) {
  const timerRef = useRef<number | undefined>();

  return (callback: (...args: any[]) => any) => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      callback();
    }, delay);
  };
}
