import React from "react";

export const SignInContext = React.createContext<{
  workerId: string | undefined;
}>({
  workerId: undefined,
});
