import { useState } from 'react';

export default function useToggle() {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return { state, toggleState };
}
