<script lang="ts" setup>
import { useStationsStore } from "~/store/stations";
const stationsStore = useStationsStore();
const status = ref("");
const substatus = ref("");
const active = ref("");
const from_date_install = ref("");
const to_date_install = ref("");
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
      <q-bar class="bg-white q-py-lg">
        <span>Station Filters</span>
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

      <q-card-section class="q-mb-md">
        <p class="text-weight-bold q-mb-none">Status</p>
        <p class="q-pt-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <q-option-group
          v-model="status"
          :options="options"
          color="primary"
          inline
        />
        <p class="text-weight-bold q-mt-sm q-mb-none">Substatus</p>
        <p class="q-pt-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <q-option-group
          v-model="substatus"
          :options="options"
          color="primary"
          inline
        />
        <p class="text-weight-bold q-mt-sm q-mb-none">Is active</p>
        <p class="q-pt-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <q-option-group
          v-model="active"
          :options="options"
          color="primary"
          inline
        />
        <p class="text-weight-bold q-mt-sm q-mb-none">Installation day</p>
        <p class="q-pt-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <q-input
          prefix="From:"
          bg-color="white"
          outlined
          dense
          square
          v-model="from_date_install"
          mask="date"
        >
          <q-popup-proxy>
            <q-date v-model="from_date_install" minimal square>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-input>

        <q-input
          class="q-mt-sm"
          prefix="To:"
          bg-color="white"
          outlined
          dense
          square
          v-model="to_date_install"
        >
          <q-popup-proxy>
            <q-date v-model="to_date_install" minimal square>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-input>
      </q-card-section>
      <q-card-actions class="q-mt-sm q-pa-none">
        <q-btn
          square
          unelevated
          color="grey-9"
          stretch
          class="text-weight-light"
          no-caps
          size="large"
          style="width: 50%"
        >
          Clear filters
        </q-btn>
        <q-space></q-space>

        <q-btn
          square
          unelevated
          color="blue-10"
          class="text-weight-light"
          stretch
          block
          no-caps
          style="width: 50%"
          size="large"
        >
          Apply filters
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
