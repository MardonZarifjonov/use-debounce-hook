import { useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';
import { useDebounceCallback } from './utils/useDebounceCallback';
import { useDebounceValue } from './utils/useDebounceValue';

export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const debounceCallback = useDebounceCallback();
  const debouncedValue = useDebounceValue(value2);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(event.target.value);
    debounceCallback(() => console.log('Value1 is sent to server: ', value1));
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue !== '' && debouncedValue) {
      console.log('Value2 is sent to server: ', value2);
    }
  }, [debouncedValue]);

  return (
    <Wrapper>
      <Wrapper>
        <h2>Debounce with callback</h2>
        <input
          value={value1}
          onChange={handleChange1}
          placeholder='Enter some text'
        />
      </Wrapper>
      <Wrapper>
        <h2>Debounce with value</h2>
        <input
          value={value2}
          onChange={handleChange2}
          placeholder='Enter some text'
        />
      </Wrapper>
    </Wrapper>
  );
}
