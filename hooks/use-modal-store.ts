import { ClassWithMembersWithProfile } from "@/types";
import { create } from "zustand";

export type ModalType =
  | "createClass"
  | "joinClass"
  | "classCode"
  | "joinClass"
  | "editClass";

interface modalData {
  class?: ClassWithMembersWithProfile;
  classInfo?: {
    id: string;
    name: string;
    section?: string;
    subject?: string;
    room?: string;
  };
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
