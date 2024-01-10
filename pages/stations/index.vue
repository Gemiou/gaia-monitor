<script lang="ts" setup>
definePageMeta({
  name: "stations",
  title: "Stations",
  path: "/stations",
  layout: "default",
});
const tab = ref("stations");
</script>

<template>
  <q-page>
    <page-title title="Stations"></page-title>
    <q-tabs v-model="tab" no-caps inline-label align="left" class="q-px-md">
      <q-tab name="stations" label="List" class="text-primary" />
      <q-tab name="graphs" label="Graphs" class="text-primary" />
    </q-tabs>

    <stations-charts class="q-mt-xs" v-if="tab === 'graphs'"></stations-charts>
    <stations-table class="q-mt-md" v-if="tab === 'stations'"></stations-table>
    <stations-filters-dialog></stations-filters-dialog>
  </q-page>
</template>
