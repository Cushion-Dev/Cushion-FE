import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuth {
  isLogIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

const useAuthStore = create<IAuth>()(
  persist(
    (set) => ({
      isLogIn: false,
      logIn: () => set(() => ({ isLogIn: true })),
      logOut: () => set(() => ({ isLogIn: false })),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
