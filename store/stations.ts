import { defineStore } from "pinia";

export const useStationsStore = defineStore("stationsStore", {
  state: () => {
    return {
      filtersDialogState: false as boolean,
    };
  },
  actions: {
    setFiltersDialogState() {
      this.filtersDialogState = !this.filtersDialogState;
    },
  },
  getters: {
    getFiltersDialogState: (state) => state.filtersDialogState,
  },
});
