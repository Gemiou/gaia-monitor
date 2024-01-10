<script lang="ts" setup>
import mapboxgl from "mapbox-gl";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWZ0aHltaW91Z2UiLCJhIjoiY2xmMTdzbHQ0MDV1eDNvcjBndDVrZ2VvbiJ9.MdPno7H6OqeP_CNdYzYfxQ";
const stationmapContainer = ref(null);
onMounted(() => {
  const map = new mapboxgl.Map({
    container: stationmapContainer.value,
    style: "mapbox://styles/efthymiouge/clgz255wl00i201qy8pf2433n", // Replace with your preferred map style
    center: [-71.224518, 42.213995],
    zoom: 15,
  });
});
</script>

<template>
  <div class="row q-mt-md">
    <div class="col-7 q-px-md">
      <q-card flat square class="q-pa-lg" style="height: 300px">
        <div class="text-weight-medium text-body1">Overview</div>
        <q-separator class="q-my-md"></q-separator>
        <div class="flex q-mt-lg">
          <div>
            <p class="text-weight-bold">
              Firmware: <span class="text-weight-medium">2012301200</span>
            </p>
            <p class="text-weight-bold">
              DB TS:
              <span class="text-weight-medium">12/20/2020 - 12:00:00</span>
            </p>
            <p class="text-weight-bold">
              Board version:
              <span class="text-weight-medium">V3</span>
            </p>
            <p class="text-weight-bold">
              Installation day:
              <span class="text-weight-medium">12/20/2020 - 12:00:00</span>
            </p>
          </div>
          <div class="q-ml-lg">
            <p class="text-weight-bold">
              Location: <span class="text-weight-medium">Κορινθία 6</span>
            </p>
            <p class="text-weight-bold">
              Status:

              <span
                class="text-capitalize text-weight-medium"
                :class="true ? 'text-red' : ''"
              >
                Offline
              </span>
            </p>
            <p class="text-weight-bold">
              Operation:

              <span
                class="text-capitalize text-weight-medium"
                :class="true ? 'text-green' : ''"
              >
                Operational
              </span>
            </p>
            <p class="text-weight-bold">
              Active:

              <span
                class="text-capitalize text-weight-medium"
                :class="true ? 'text-green' : ''"
              >
                Yes
              </span>
            </p>
          </div>
        </div>
      </q-card>
    </div>
    <div class="col-5 q-px-md">
      <q-card flat square style="height: 300px" class="q-pa-lg">
        <div class="text-weight-medium text-body1">Position</div>
        <q-separator class="q-my-md"></q-separator>

        <div
          ref="stationmapContainer"
          class="station-map-container q-mt-sm"
        ></div>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss">
.station-map-container {
  height: 200px;
}
</style>
