import { create } from 'zustand';

interface IMember {
  member: string;
  isMemberValid: boolean;
  setMemberValid: () => void;
  setMember: (value: string) => void;
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

export const useMemberStore = create<IMember>((set, get) => ({
  member: '',
  isMemberValid: false,
  setMemberValid: () => {
    const currentMember = get().member.length;
    const isValid = currentMember > 0 && currentMember < 16;
    if (isValid) set({ isMemberValid: true });
    else set({ isMemberValid: false });
  },
  setMember: (updatedMember) => set({ member: updatedMember }),
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
