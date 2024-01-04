<script lang="ts" setup>
const expandedCounter = ref(true);
</script>

<template>
  <div class="row q-col-gutter-md">
    <div class="col-2">
      <q-card flat square class="q-pa-lg">
        <div class="text-weight-light text-h6">Stations</div>
        <q-separator class="q-my-md"></q-separator>
        <div class="text-h4 text-weight-medium">
          320
          <span class="text-h6 text-weight-light text-gray-700">Total</span>
        </div>
      </q-card>
    </div>
    <div class="col-3">
      <q-card flat square class="q-pa-lg">
        <div class="text-weight-light text-h6">Status</div>
        <q-separator class="q-my-md"></q-separator>
        <div class="flex q-gutter-lg">
          <div class="text-h4 text-weight-medium">
            300
            <span class="text-h6 text-weight-light text-gray-700">Online</span>
          </div>
          <div class="text-h4 text-weight-medium">
            20
            <span class="text-h6 text-weight-light text-gray-700">Offline</span>
          </div>
        </div>
      </q-card>
    </div>
    <div class="col-3">
      <q-card flat square class="q-pa-lg">
        <div class="text-weight-light text-h6">Active</div>
        <q-separator class="q-my-md"></q-separator>
        <div class="flex q-gutter-lg">
          <div class="text-h4 text-weight-medium">
            300
            <span class="text-h6 text-weight-light text-gray-700">Active</span>
          </div>
          <div class="text-h4 text-weight-medium">
            20
            <span class="text-h6 text-weight-light text-gray-700"
              >Inactive</span
            >
          </div>
        </div>
      </q-card>
    </div>
    <div class="col-4">
      <q-card flat square class="q-pa-lg">
        <div class="text-weight-light text-h6">State</div>
        <q-separator class="q-my-md"></q-separator>
        <div class="flex q-gutter-lg">
          <div class="text-h4 text-weight-medium">
            300
            <span class="text-h6 text-weight-light text-gray-700"
              >operational</span
            >
          </div>
          <div class="text-h4 text-weight-medium">
            20
            <span class="text-h6 text-weight-light text-gray-700">Lab</span>
          </div>
          <div class="text-h4 text-weight-medium">
            0
            <span class="text-h6 text-weight-light text-gray-700"
              >Installation</span
            >
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
