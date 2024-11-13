import { useContext } from "react";
import { SignInContext } from "./context";

export const useAuth = () => {
  const context = useContext(SignInContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const useIsSignedIn = () => {
  const { workerId } = useAuth();
  return !!workerId;
};

export const useIsSignedOut = () => {
  const { workerId } = useAuth();
  return !workerId;
};
