import { create } from 'zustand';

interface Partner {
  partnerName: string;
  partnerRel: string;
  setPartnerName: (value: string) => void;
  setPartnerRel: (value: string) => void;
}

export const usePartnerStore = create<Partner>((set) => ({
  partnerName: '',
  partnerRel: '',
  setPartnerName: (updatedName) => set(() => ({ partnerName: updatedName })),
  setPartnerRel: (updatedRel) => set(() => ({ partnerRel: updatedRel })),
}));
