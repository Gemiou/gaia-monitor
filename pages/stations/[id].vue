<script lang="ts" setup>
definePageMeta({
  name: "station",
  title: "Station",
  layout: "default",
});
const tab = ref("info");
</script>

<template>
  <q-page>
    <page-title
      title="Station"
      sub_title="STA-05-A0033"
      synchronize_at=" 12/20/2020 - 12:00:00"
      mode="Test mode"
    ></page-title>
    <q-tabs v-model="tab" no-caps inline-label align="left" class="q-px-md">
      <q-tab name="info" label="Info" class="text-primary" />
      <q-tab name="graph" label="Graph" class="text-primary" />
      <q-tab name="logs" label="Logs" class="text-primary" />
    </q-tabs>

    <station-info v-if="tab === 'info'"></station-info>
    <station-sensors v-if="tab === 'info'"></station-sensors>
  </q-page>
</template>
