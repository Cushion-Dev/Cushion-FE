import { create } from 'zustand';

interface IAffiliation {
  affiliation: string;
  isAffiliationValid: boolean;
  setAffiliationValid: () => void;
  setAffiliation: (value: string) => void;
}

interface IJob {
  job: string;
  isJobValid: boolean;
  setJobValid: () => void;
  setJob: (value: string) => void;
}

interface IName {
  name: string;
  isNameValid: boolean;
  setNameValid: () => void;
  setName: (value: string) => void;
}

export const useAffiliationStore = create<IAffiliation>((set, get) => ({
  affiliation: '',
  isAffiliationValid: false,
  setAffiliationValid: () => {
    const currentAffiliation = get().affiliation.length;
    const isValid = currentAffiliation > 0 && currentAffiliation < 16;
    if (isValid) set({ isAffiliationValid: true });
    else set({ isAffiliationValid: false });
  },
  setAffiliation: (updatedAffiliation) =>
    set({ affiliation: updatedAffiliation }),
}));

export const useJobStore = create<IJob>((set, get) => ({
  job: '',
  isJobValid: false,
  setJobValid: () => {
    const currentJob = get().job.length;
    const isValid = currentJob > 0 && currentJob < 16;
    if (isValid) set({ isJobValid: true });
    else set({ isJobValid: false });
  },
  setJob: (updatedJob) => set({ job: updatedJob }),
}));

export const useNameStore = create<IName>((set, get) => ({
  name: '',
  isNameValid: false,
  setNameValid: () => {
    const currentName = get().name.length;
    const isValid = currentName > 0 && currentName < 16;
    if (isValid) set({ isNameValid: true });
    else set({ isNameValid: false });
  },
  setName: (updatedName) => set({ name: updatedName }),
}));
