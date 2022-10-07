import { useLocation } from "react-router-dom";

export function Success() {
  const { state } = useLocation();
  const { message } = state;

  return <>{JSON.stringify(message)}</>;
}
