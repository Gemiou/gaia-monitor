<script lang="ts" setup>
const expandedTransmission = ref(true);
</script>

<template>
  <q-expansion-item
    expand-separator
    v-model="expandedTransmission"
    label="Transmission analysis"
    class="bg-white"
  >
    <q-card flat square style="height: 230px">
      <q-card-section>
        <charts-pie></charts-pie>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
