<script lang="ts" setup>
definePageMeta({
  name: "stations",
  title: "Stations",
  path: "/stations",
  layout: "default",
});
</script>

<template>
  <q-page>
    <page-title title="Stations"></page-title>
    <stations-charts class="q-mt-xs"></stations-charts>
    <!-- <stations-filters-toolbar class="q-mt-md"></stations-filters-toolbar> -->
    <stations-table class="q-mt-md"></stations-table>
    <stations-filters-dialog></stations-filters-dialog>
  </q-page>
</template>
