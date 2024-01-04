import { $axios } from "@/composables";

const fetchStations = async function () {
  const response = await $axios.get("fake/stations.json");
  return response.data;
};

export { fetchStations };
