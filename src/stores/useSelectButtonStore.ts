import { create } from 'zustand';

interface ISelect {
  selectedName: string[];
  selectedCount: number;
  addSelectedName: (value: string) => void;
  subSelectedName: (value: string) => void;
  addSelectedCount: () => void;
  subSelectedCount: () => void;
  resetSelectedCount: () => void;
}

export const useSelectedStore = create<ISelect>((set) => ({
  selectedName: [],
  selectedCount: 0,
  addSelectedName: (updatedName) =>
    set((state) => ({ selectedName: [...state.selectedName, updatedName] })),
  subSelectedName: (cancelName) =>
    set((state) => ({
      selectedName: state.selectedName.filter((name) => name !== cancelName),
    })),
  addSelectedCount: () =>
    set((state) => ({ selectedCount: state.selectedCount + 1 })),
  subSelectedCount: () =>
    set((state) => ({ selectedCount: state.selectedCount - 1 })),
  resetSelectedCount: () => set(() => ({ selectedCount: 0 })),
}));
