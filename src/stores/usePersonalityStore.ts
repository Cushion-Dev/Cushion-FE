import { create } from 'zustand';

interface Personality {
  personality: string;
  setPersonality: (value: string) => void;
}

export const usePersonalityStore = create<Personality>((set) => ({
  personality: '',
  setPersonality: (updatedPersonality) => {
    set(() => ({ personality: updatedPersonality }));
  },
}));
