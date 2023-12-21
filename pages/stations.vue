<script lang="ts" setup>
definePageMeta({
  name: "stations",
  path: "/stations",
  title: "Stations",
  layout: "default",
});
</script>

<template>
  <q-page>
    <page-title title="Stations"></page-title>
    <stations-filters-toolbar></stations-filters-toolbar>
    <statios-filtres-dialog></statios-filtres-dialog>
  </q-page>
</template>
