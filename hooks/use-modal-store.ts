import { ClassWithMembersWithProfile } from "@/types";
import { create } from "zustand";

export type ModalType = "createClass" | "joinClass" | "classCode";

interface modalData {
  class?: ClassWithMembersWithProfile;
}

interface ModalStore {
  data: modalData;
  isOpen: boolean;
  type: ModalType | null;
  onOpen: (type: ModalType, data?: modalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  data: {},
  onOpen: (type, data = {}) => set({ type, data, isOpen: true }),
  onClose: () => set({ type: null, isOpen: false }),
}));
