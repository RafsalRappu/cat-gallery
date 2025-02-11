import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";

export const defaultToastOptions: ToastOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "colored",
  transition: Slide,
//   icon: successIcon.src,
  closeButton: true,
};

type ToastType = "success" | "error" | "info" | "warning" | "default";

const variantToClassMap: Record<ToastType, string> = {
  success: "custom-toast-success",
  error: "custom-toast-error",
  info: "custom-toast-info",
  warning: "custom-toast-warning",
  default: "custom-toast-default",
};

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  const optionsToApply = {
    ...defaultToastOptions,
    ...options,
    className: variantToClassMap[type],
  };

  switch (type) {
    case "success":
      return toast.success(content, optionsToApply);
    case "error":
      return toast.error(content, optionsToApply);
    case "info":
      return toast.info(content, optionsToApply);
    case "warning":
      return toast.warn(content, optionsToApply);
    case "default":
      return toast(content, optionsToApply);
    default:
      return toast(content, optionsToApply);
  }
};
