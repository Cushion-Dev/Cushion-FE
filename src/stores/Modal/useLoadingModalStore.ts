import { create } from 'zustand';

interface LoadingModal {
  message: string;
  setMessage: (value: string) => void;
}

const useLoadingModalStore = create<LoadingModal>((set) => ({
  message: '',
  setMessage: (updatedMessage) => set({ message: updatedMessage }),
}));

// const useMessageModal =

export default useLoadingModalStore;
