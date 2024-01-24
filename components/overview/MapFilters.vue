<script lang="ts" setup>
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
  <q-card class="overview-filters-container" flat>
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
  </q-card>
</template>

<style lang="scss">
.overview-filters-container {
  height: 67vh;
}
</style>
