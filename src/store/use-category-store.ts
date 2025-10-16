import { create, StateCreator } from 'zustand';

interface Actions {
  setActiveID: (id: number) => void;
}

interface InitialState {
  activeID: number;
}

interface CategoryState extends Actions, InitialState {}

const initialState: InitialState = {
  activeID: 1,
};

const categoryStore: StateCreator<CategoryState> = (set) => ({
  ...initialState,
  setActiveID: (activeID: number) => set({ activeID }),
});

const useCategoryStore = create<CategoryState>(categoryStore);

export const useActiveCategory = () =>
  useCategoryStore((state) => state.activeID);

export const useSetActiveCategory = () =>
  useCategoryStore((state) => state.setActiveID);
