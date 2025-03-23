import { useState } from "react";
import toast from "react-hot-toast";

export function useDeletePopup({ successMessage, cancelMessage }) {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function handleAccept() {
    toast.success(successMessage);
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
