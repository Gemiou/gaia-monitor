<script lang="ts" setup>
import { useStationsStore } from "~/store/stations";
const stationsStore = useStationsStore();
const station_name = ref("");
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
        flat
        color="black"
        no-caps
        icon="tune"
        @click="stationsStore.setFiltersDialogState"
      >
      </q-btn>
    </div>

    <q-space></q-space>

    <q-btn square unelevated color="blue-10" no-caps> Export CSV </q-btn>
  </q-toolbar>
</template>
