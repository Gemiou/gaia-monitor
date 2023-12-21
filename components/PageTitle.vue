<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <q-toolbar class="bg-white q-pl-lg" style="min-height: 50px !important">
    <q-toolbar-title>{{ props.title }}</q-toolbar-title>
  </q-toolbar>
</template>
