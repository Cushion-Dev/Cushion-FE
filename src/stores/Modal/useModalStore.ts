import { create } from 'zustand';

type ModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const createModalStore = (initialState: boolean) =>
  create<ModalState>((set) => ({
    isOpen: initialState,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }));

export const useEditUserModal = createModalStore(false);
export const useMakeModal = createModalStore(false);
export const useEditProfileModal = createModalStore(false);
