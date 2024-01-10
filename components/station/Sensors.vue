import type { StationsTable } from '#build/components'; import type loginVue
from '~/pages/login.vue';
<script lang="ts" setup>
let sensor_selected = ref("Winddir");
const sensors = [{ name: "Winddir" }, { name: "Battery" }];
const selectSensor = (sensor_name) => {
  sensor_selected.value = sensor_name;
};
</script>

<template>
  <div class="row q-mt-md">
    <div class="col-12 q-px-md">
      <q-card flat square class="q-pa-lg" style="height: 300px">
        <div class="text-weight-medium text-body1">Sensors</div>

        <q-separator class="q-my-md"></q-separator>
        <q-tabs no-caps inline-label align="left">
          <q-btn
            @click="selectSensor(sensor.name)"
            v-for="sensor in sensors"
            no-caps
            flat
            :label="sensor.name"
            class="text-primary q-mr-sm"
            :class="
              sensor.name === sensor_selected ? 'bg-black text-white' : ''
            "
          />
        </q-tabs>
        <q-separator class="q-my-md"></q-separator>
      </q-card>
    </div>
  </div>
</template>
