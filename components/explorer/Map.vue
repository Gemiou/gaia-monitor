<script lang="ts" setup>
import mapboxgl from "mapbox-gl";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWZ0aHltaW91Z2UiLCJhIjoiY2xmMTdzbHQ0MDV1eDNvcjBndDVrZ2VvbiJ9.MdPno7H6OqeP_CNdYzYfxQ";
const mapContainer = ref(null);
onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: "mapbox://styles/efthymiouge/clgz255wl00i201qy8pf2433n", // Replace with your preferred map style
    center: [-71.224518, 42.213995],
    zoom: 1.8,
  });
});
</script>

<template>
  <div class="row">
    <div class="col-12 q-px-md">
      <div ref="mapContainer" class="map-container"></div>
    </div>
  </div>
</template>

<style lang="scss">
.map-container {
  height: 77vh;
}
</style>
