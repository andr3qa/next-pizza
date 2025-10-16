import { create } from 'zustand';

interface State {
  activeID: number;
  setActiveID: (id: number) => void;
}

export const useCategoryStore = create<State>()((set) => ({
  activeID: 1,
  setActiveID: (activeID: number) => set({ activeID }),
}));
