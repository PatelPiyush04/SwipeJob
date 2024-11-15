import React from "react";

export const SignInContext = React.createContext<{
  workerId: string | undefined;
  setWorkerId: (workerId: string) => void;
  clearWorkerId: () => void;
}>({
  workerId: undefined,
  setWorkerId: () => {},
  clearWorkerId: () => {},
});
