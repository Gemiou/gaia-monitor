<script lang="ts" setup>
const expandedCounter = ref(true);
</script>

<template>
  <q-expansion-item
    expand-separator
    v-model="expandedCounter"
    label="Stations statistics"
    class="bg-white text-weight-bold"
  >
    <q-card flat square style="height: 260px" class="q-px-md">
      <div class="text-weight-light text-h6">Total</div>
      <div class="text-h4 text-weight-medium">320</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="flex col-q-gutter-lg">
        <div class="q-mr-lg">
          <div class="text-weight-light text-h6">Status</div>
          <q-chip
            size="12px"
            square
            color="black"
            text-color="white"
            class="text-capitalize text-weight-bold"
          >
            10 Online
          </q-chip>
          <q-chip
            square
            size="12px"
            color="black"
            text-color="white"
            class="text-capitalize text-weight-bold"
          >
            20 Offline</q-chip
          >
        </div>
        <div>
          <div class="text-weight-light text-h6">Active</div>
          <q-chip
            size="12px"
            square
            color="black"
            text-color="white"
            class="text-capitalize text-weight-bold"
          >
            10 Active
          </q-chip>
          <q-chip
            size="12px"
            square
            color="black"
            text-color="white"
            class="text-capitalize text-weight-bold"
          >
            20 Inactive
          </q-chip>
        </div>
        <div>
          <div class="text-weight-light text-h6">State</div>
          <q-chip
            size="12px"
            square
            color="black"
            text-color="white"
            class="text-capitalize text-weight-bold"
          >
            10 operational
          </q-chip>
          <q-chip
            size="12px"
            square
            color="black"
            text-color="white"
            class="text-capitalize text-weight-bold"
          >
            20 lab
          </q-chip>
          <q-chip
            size="12px"
            square
            color="black"
            text-color="white"
            class="text-capitalize text-weight-bold"
          >
            20 installation
          </q-chip>
        </div>
      </div>
    </q-card>
  </q-expansion-item>
</template>
