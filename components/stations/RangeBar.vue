<script lang="ts" setup>
const expandedRange = ref(false);
</script>
<template>
  <q-expansion-item
    expand-separator
    v-model="expandedRange"
    label="Out of range sensors"
    class="bg-white"
  >
    <q-card flat square style="height: 230px">
      <q-card-section>
        <charts-bar></charts-bar>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
