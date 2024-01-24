import { defineStore } from "pinia";
import { fetchLogs } from "@/services/logs";
export const useLogsStore = defineStore("logsStore", {
  state: () => {
    return {
      logs: [] as any,
      tableLogsColumns: [
        {
          name: "level",
          align: "left",
          label: "Level",
          field: "level",
          sortable: true,
        },
        {
          name: "time",
          label: "Time",
          field: "Time",
          sortable: true,
          align: "left",
        },
        {
          name: "env",
          label: "Env",
          field: "env",
          sortable: true,
          align: "center",
        },
        {
          name: "message",
          label: "Message",
          field: "message",
          sortable: true,
          align: "center",
        },
        {
          name: "description",
          label: "Description",
          field: "description",
          sortable: true,
          align: "left",
        },
      ],
    };
  },
  actions: {
    async setLogs() {
      await fetchLogs().then((res) => {
        this.logs = res;
      });
    },
  },
  getters: {
    getLogs: (state) => state.logs,
    getTableLogsColumns: (state) => state.tableLogsColumns,
  },
});
