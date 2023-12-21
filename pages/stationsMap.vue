<script lang="ts" setup>
definePageMeta({
  name: "stationsMap",
  path: "/stations-map",
  title: "Stations Map",
  layout: "default",
});
</script>

<template>
  <q-page>
    <page-title title="Stations Map"></page-title>
    <stations-filters-toolbar></stations-filters-toolbar>
    <statios-filtres-dialog></statios-filtres-dialog>
  </q-page>
</template>
