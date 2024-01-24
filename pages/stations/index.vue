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
    <page-title
      title="Stations"
      synchronize_at=" 12/20/2020 - 12:00:00"
    ></page-title>
    <stations-table class="q-mt-md"></stations-table>
    <stations-filters-dialog></stations-filters-dialog>
  </q-page>
</template>
