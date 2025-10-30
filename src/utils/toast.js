import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToast = (message, type = "info") => {
  let backgroundColor;

  switch (type) {
    case "success":
      backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)";
      break;
    case "error":
      backgroundColor = "linear-gradient(to right, #ff5f6d, #ffc371)";
      break;
    case "warning":
      backgroundColor = "linear-gradient(to right, #f7971e, #ffd200)";
      break;
    default:
      backgroundColor = "linear-gradient(to right, #00c6ff, #0072ff)";
  }

  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor,
  }).showToast();
};
