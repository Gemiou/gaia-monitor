<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  synchronize_at: { type: String, required: true },
  sub_title: { type: String, required: false },
  mode: { type: String, required: false },
});
</script>

<template>
  <q-toolbar class="bg-white q-pl-lg" style="min-height: 50px !important">
    <span class="text-h5 q-py-md">{{ props.title }}</span>
    <q-separator vertical class="q-mx-md" v-if="props.sub_title"></q-separator>
    <span class="text-h6 text-grey-7 q-mr-sm">{{ props.sub_title }}</span>
    <q-chip square text-color="white" color="black" v-if="props.mode">
      {{ props.mode }}
    </q-chip>
    <q-space></q-space>
    <q-chip square class="bg-transparent" dense>
      <span class="q-mr-sm text-weight-bold">Synchronize at:</span>
      {{ props.synchronize_at }}
    </q-chip>
    <q-btn square unelevated color="black" no-caps> Refresh data </q-btn>
  </q-toolbar>
</template>
