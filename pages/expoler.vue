<script lang="ts" setup>
definePageMeta({
  name: "expoler",
  path: "/expoler",
  title: "Expoler",
  layout: "default",
});
</script>

<template>
  <q-page>
    <page-title title="Expoler"></page-title>
    <expoler-filters-toolbar></expoler-filters-toolbar>
    <expoler-map></expoler-map>
  </q-page>
</template>
