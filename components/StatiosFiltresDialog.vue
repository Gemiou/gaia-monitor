<script lang="ts" setup>
import { useStationsStore } from "~/store/stations";
const stationsStore = useStationsStore();
const status = ref("");
const substatus = ref("");
const active = ref("");
const options = ref([
  {
    label: "Option 1",
    value: "op1",
  },
  {
    label: "Option 1",
    value: "op1",
  },
  {
    label: "Option 1",
    value: "op1",
  },
]);
</script>

<template>
  <q-dialog v-model="stationsStore.getFiltersDialogState" persistent square>
    <q-card style="width: 400px">
      <q-bar>
        <q-space />

        <q-btn
          dense
          flat
          icon="close"
          @click="stationsStore.setFiltersDialogState"
        >
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <p>More filters</p>
        <p class="text-weight-bold">Stations status</p>
        <q-option-group
          v-model="status"
          :options="options"
          color="primary"
          inline
        />
        <p class="text-weight-bold q-mt-sm">Stations substatus</p>
        <q-option-group
          v-model="substatus"
          :options="options"
          color="primary"
          inline
        />
        <p class="text-weight-bold q-mt-sm">Stations active</p>
        <q-option-group
          v-model="active"
          :options="options"
          color="primary"
          inline
        />
      </q-card-section>
      <q-card-actions>
        <q-space></q-space>
        <q-btn square unelevated color="blue-10" no-caps> Apply filters </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
