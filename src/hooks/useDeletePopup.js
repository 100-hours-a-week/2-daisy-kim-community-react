import { useState } from "react";
import toast from "react-hot-toast";

export function useDeletePopup({ successMessage, cancelMessage, onConfirm }) {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function handleAccept() {
    toast.success(successMessage);
    onConfirm?.();
    setIsOpen(false);
  }

  function handleClose() {
    toast.error(cancelMessage);
    setIsOpen(false);
  }

  return {
    isOpen,
    openPopup,
    handleAccept,
    handleClose,
  };
}
