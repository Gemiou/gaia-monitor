<script lang="ts" setup>
definePageMeta({
  name: "explorer",
  path: "/explorer",
  title: "Explorer",
  layout: "default",
});
</script>

<template>
  <q-page>
    <page-title title="Explorer"></page-title>
    <explorer-filters-toolbar></explorer-filters-toolbar>
    <explorer-map></explorer-map>
  </q-page>
</template>
