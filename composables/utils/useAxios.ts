import axios from "axios";
import { storeToRefs } from "pinia";

const $axios = axios.create({
  baseURL: "",
});

export { $axios };
