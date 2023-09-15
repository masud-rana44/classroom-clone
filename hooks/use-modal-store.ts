import { create } from "zustand";

export type ModalType = "createClass" | "joinClass";

type ModalStore = {
  isOpen: boolean;
  type: ModalType | null;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
};

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  onOpen: (type) => set({ type, isOpen: true }),
  onClose: () => set({ type: null, isOpen: false }),
}));
