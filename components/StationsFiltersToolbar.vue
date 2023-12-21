<script lang="ts" setup>
import { useStationsStore } from "~/store/stations";
const stationsStore = useStationsStore();
const station_name = ref("");

const from_date_install = ref("");
const to_date_install = ref("");
</script>

<template>
  <q-toolbar dense style="min-height: 60px !important">
    <div class="flex q-gutter-sm">
      <q-input
        placeholder="Station name"
        bg-color="white"
        outlined
        dense
        square
        v-model="station_name"
      >
        <template v-slot:append>
          <q-icon
            v-if="station_name !== ''"
            name="close"
            @click="station_name = ''"
            class="cursor-pointer"
          />
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn
        square
        unelevated
        color="black"
        no-caps
        icon="tune"
        @click="stationsStore.setFiltersDialogState"
      >
      </q-btn>
    </div>

    <q-space></q-space>

    <div class="flex q-gutter-sm">
      <q-input
        prefix="From:"
        bg-color="white"
        outlined
        dense
        square
        input-style="width:100px"
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
        input-style="width:100px"
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
      <q-btn square unelevated color="blue-10" no-caps> Search </q-btn>
    </div>
  </q-toolbar>
</template>
