import { $axios } from "@/composables";

const fetchLogs = async function () {
  const response = await $axios.get("fake/logs.json");
  return response.data;
};

export { fetchLogs };
