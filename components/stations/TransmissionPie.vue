<script lang="ts" setup>
const expandedTransmission = ref(true);
</script>

<template>
  <q-expansion-item
    expand-separator
    v-model="expandedTransmission"
    label="Transmission analysis"
    class="bg-white text-weight-bold"
  >
    <q-card flat square style="height: 260px">
      <charts-pie></charts-pie>
    </q-card>
  </q-expansion-item>
</template>
