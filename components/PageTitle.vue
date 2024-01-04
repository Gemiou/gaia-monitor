<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <q-toolbar class="bg-white q-pl-lg" style="min-height: 50px !important">
    <q-toolbar-title class="text-h4 q-py-md">{{ props.title }}</q-toolbar-title>
    <q-space></q-space>
    <q-chip square class="bg-transparent" dense>
      <span class="q-mr-sm text-weight-bold">Synchronize at:</span>
      12/20/2020 - 12:00:00
    </q-chip>
    <q-btn square unelevated color="black" no-caps> Refresh data </q-btn>
  </q-toolbar>
</template>
