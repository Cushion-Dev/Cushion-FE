import { create } from 'zustand';

interface Characteristics {
  characteristics: string;
  setCharacteristics: (value: string) => void;
}

export const useCharacteristicsStore = create<Characteristics>((set) => ({
  characteristics: '',
  setCharacteristics: (updatedCharacteristics) => {
    set(() => ({ characteristics: updatedCharacteristics }));
  },
}));
