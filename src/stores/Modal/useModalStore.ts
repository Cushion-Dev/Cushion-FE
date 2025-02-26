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

const useEditUserModal = createModalStore(false);
const useMakeModal = createModalStore(false);
const useEditProfileModal = createModalStore(false);
const useLogoutDialog = createModalStore(false);
const useWithdrawDialog = createModalStore(false);
const useMessageLoading = createModalStore(false);
const useOcrLoading = createModalStore(false);
const useCharacteristicsLoading = createModalStore(false);
const useLoginDialog = createModalStore(false);

export {
  useEditUserModal,
  useMakeModal,
  useEditProfileModal,
  useLogoutDialog,
  useWithdrawDialog,
  useMessageLoading,
  useOcrLoading,
  useCharacteristicsLoading,
  useLoginDialog,
};
