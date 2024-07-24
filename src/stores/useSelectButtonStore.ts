import { create } from 'zustand';

interface ISelect {
  selectedName: string;
  selectedCount: number;
  setSelectedName: (value: string) => void;
  addSelectedCount: () => void;
  subSelectedCount: () => void;
  resetSelectedCount: () => void;
}

export const useSelectedStore = create<ISelect>((set) => ({
  selectedName: '',
  selectedCount: 0,
  setSelectedName: (updatedName) => set(() => ({ selectedName: updatedName })),
  addSelectedCount: () =>
    set((state) => ({ selectedCount: state.selectedCount + 1 })),
  subSelectedCount: () =>
    set((state) => ({ selectedCount: state.selectedCount - 1 })),
  resetSelectedCount: () => set(() => ({ selectedCount: 0 })),
}));
