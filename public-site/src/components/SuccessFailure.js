import { useLocation } from "react-router-dom";
import "./successfailure.css";

export function SuccessFailure() {
  const { state } = useLocation();
  const { message, success } = state;

  const getIcon = () => {
    return success ? "fa-check-circle" : "fa-times-circle";
  };

  return (
    <>
      <div class="text-center">
        <i class={`fas ${getIcon()} fa-10x my-3`}></i>
        <h4>{message}</h4>
      </div>
    </>
  );
}
