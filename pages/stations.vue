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
    <stations-charts></stations-charts>
    <stations-table class="q-mt-md"></stations-table>
    <stations-filters-dialog></stations-filters-dialog>
  </q-page>
</template>
