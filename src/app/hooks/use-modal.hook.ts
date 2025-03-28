import { useState } from "react";

import { ModalType } from "../common/types/modal.types";


export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [callback, setCallback] = useState<((value?: string) => void) | null>(null);

  const openModal = (type: ModalType, action: (value?: string) => void) => {
    setModalType(type);
    setCallback(() => action);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    setCallback(null);
  };

  const confirmAction = (value?: string) => {
    if (callback) callback(value);
    closeModal();
  };

  return { isOpen, modalType, openModal, closeModal, confirmAction };
};
