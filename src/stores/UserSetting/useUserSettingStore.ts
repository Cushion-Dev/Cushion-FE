import { create } from 'zustand';

type Store = {
  member: string;
  setMember: (value: string) => void;
  job: string;
  setJob: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  isValid: boolean;
  setIsValid: () => void;
};

const useUserInputStore = create<Store>((set, get) => ({
  member: '',
  setMember: (updatedMember) => {
    set(() => ({ member: updatedMember }));
    set(() => ({ isValid: get().isValid }));
  },
  job: '',
  setJob: (updatedJob) => {
    set(() => ({ job: updatedJob }));
    set(() => ({ isValid: get().isValid }));
  },
  name: '',
  setName: (updatedName) => {
    set(() => ({ name: updatedName }));
    set(() => ({ isValid: get().isValid }));
  },
  isValid: false,
  setIsValid: () => {
    const memberLength = get().member.length;
    const jobLength = get().job.length;
    const nameLength = get().name.length;

    const memberIsValid = memberLength > 0 && memberLength < 15;
    const jobIsValid = jobLength > 0 && jobLength < 15;
    const nameIsValid = nameLength > 0 && nameLength < 15;

    return { isValid: memberIsValid && jobIsValid && nameIsValid };
  },
}));

export default useUserInputStore;
