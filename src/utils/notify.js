import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// các hạm notify !

export const notifiSucceeded = async (notity) => {
  await new Promise((resolve) => {
    toast.success(notity, {
      position: toast.POSITION.TOP_RIGHT,
      onOpen: () => {
        // Hành động cần thực hiện khi toast mở
      },
      onClose: () => {
        // Hành động cần thực hiện khi toast đóng
        alert("Toast đã đóng");
        resolve(); // resolve promise khi toast đã đóng
      },
    });
  });
};

export const notifiError = async (notity, onCloseAction) => {
  await toast.error(notity, {
    position: toast.POSITION.TOP_RIGHT,
    onClose: () => {
      // Thực hiện hành động được truyền vào thông qua tham số
      if (onCloseAction) {
        onCloseAction();
      }
    },
  });
};

export const notifiWarning = async (notity, onCloseAction) => {
  await toast.warn(notity, {
    position: toast.POSITION.TOP_RIGHT,
    onClose: () => {
      // Thực hiện hành động được truyền vào thông qua tham số
      if (onCloseAction) {
        onCloseAction();
      }
    },
  });
};

// dùng sweetalert2

export const swweetSucceeded = (
  title,
  text,
  icon,
  showConfirmButton,
  timer,
  link
) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: showConfirmButton,
    timer: timer,
  }).then(() => {
    window.open(link, "_self");
  });
};
