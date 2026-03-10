import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AppState {
  selectedSite: string | null;
  setSelectedSite: (site: string | null) => void;
}

export const useAppStore = create<AppState>()(
  immer((set) => ({
    selectedSite: null,
    setSelectedSite: (site) =>
      set((state) => {
        state.selectedSite = site;
      }),
  }))
);
