import { defineStore } from "pinia";
import { fetchStations } from "@/services/stations";
export const useStationsStore = defineStore("stationsStore", {
  state: () => {
    return {
      stations: [] as any,
      filtersDialogState: false as boolean,
      tableColumns: [
        {
          name: "station",
          align: "left",
          label: "Station",
          field: "station",
          sortable: true,
        },
        {
          name: "location",
          label: "Location",
          field: "location",
          sortable: true,
          align: "left",
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          sortable: true,
          align: "center",
        },
        {
          name: "isActive",
          label: "Active",
          field: "isActive",
          align: "center",
          sortable: true,
        },
        {
          name: "subStatus",
          label: "State",
          field: "subStatus",
          align: "center",
          sortable: true,
        },
        {
          name: "temp",
          align: "center",
          label: "Temp",
          field: "temp",
        },
        {
          name: "pressure",
          align: "center",
          label: "Pressure",
          field: "pressure",
        },
        {
          name: "pv",
          align: "center",
          label: "PV",
          field: "pv",
        },
        {
          name: "last_ts",
          label: "Last DB ts",
          field: "last_ts",
          align: "center",
        },
        {
          name: "installation_date",
          align: "center",
          label: "Installation date",
          field: "installation_date",
        },
        {
          name: "actions",
          align: "center",
          label: "",
          field: "actions",
        },
      ],
    };
  },
  actions: {
    async setStations() {
      await fetchStations().then((res) => {
        this.stations = res;
      });
    },
    setFiltersDialogState() {
      this.filtersDialogState = !this.filtersDialogState;
    },
  },
  getters: {
    getFiltersDialogState: (state) => state.filtersDialogState,
    getTableColumns: (state) => state.tableColumns,
    getStations: (state) => state.stations,
  },
});
