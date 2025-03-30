import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyle = {
  borderLeft: "4px solid #209d7d",
  boxShadow: "0 4px 6px -1px #209d7d",
  "--toastify-icon-color-success": "#209d7d",
  "--toastify-color-progress-success": "#209d7d",
  with: "50px",
};

export function SuccessToast(t) {
  toast.success(t("toast.success"), {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
    style: customStyle,
  });
}

export function ErrorToast(t) {
  toast.error(t("toast.error"), {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
    style: customStyle,
  });
}
