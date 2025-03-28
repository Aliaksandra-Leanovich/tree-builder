export type ModalType = "add" | "rename" | "delete" | null;

export interface IModalProps {
  isOpen: boolean;
  modalType: ModalType;
  onConfirm: (value?: string) => void;
  onClose: () => void;
}