import { useLocation } from "react-router-dom";

export function Failure() {
  const { state } = useLocation();
  const { message } = state;

  return <>{JSON.stringify(message)}</>;
}
