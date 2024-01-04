<script lang="ts" setup>
const expandedRange = ref(true);
</script>
<template>
  <q-expansion-item
    expand-separator
    v-model="expandedRange"
    label="Out of range sensors"
    class="bg-white text-weight-bold"
  >
    <q-card flat square style="height: 230px">
      <q-card-section>
        <charts-area-spline></charts-area-spline>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
