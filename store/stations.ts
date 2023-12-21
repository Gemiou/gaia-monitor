import { defineStore } from "pinia";

export const useStationsStore = defineStore("stationsStore", {
  state: () => {
    return {
      filtersDialogState: false as boolean,
      tableColumns: [
        {
          name: "desc",
          label: "Dessert (100g serving)",
          field: "name",
        },
      ],
    };
  },
  actions: {
    setFiltersDialogState() {
      this.filtersDialogState = !this.filtersDialogState;
    },
  },
  getters: {
    getFiltersDialogState: (state) => state.filtersDialogState,
    getTableColumns: (state) => state.tableColumns,
  },
});
