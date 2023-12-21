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
    <stations-charts class="q-mt-sm"></stations-charts>
    <stations-filters-toolbar class="q-mt-md"></stations-filters-toolbar>
    <stations-table class="q-mt-md"></stations-table>
    <stations-filters-dialog></stations-filters-dialog>
  </q-page>
</template>
