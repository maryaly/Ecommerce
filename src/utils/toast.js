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
      if (!message.endsWith("❗")) {
        message += "❗";
      }
      break;
    case "warning":
      backgroundColor = "linear-gradient(to right, #f7971e, #3c3a2fff)";
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
