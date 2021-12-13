import {useCallback, useState} from 'react';

const useTogglable = (initialState: boolean = false) => {
  const [status, updateState] = useState(initialState || false);

  const toggle = () => updateState(current => !current);

  const turnOn = () => updateState(true);

  const turnOff = () => updateState(false);

  return {
    status,
    toggle,
    turnOn,
    turnOff,
  };
};

export default useTogglable;
