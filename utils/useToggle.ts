import { useCallback, useState } from "react";

const useToggle = (initialValueToggle = false) => {
  const [state, setState] = useState(initialValueToggle);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle] as const;
};

export default useToggle;
