<script lang="ts" setup>
const station_name = ref("");
const status = ref("");
const substatus = ref("");
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
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
      <q-select
        v-model="status"
        :options="options"
        bg-color="white"
        outlined
        dense
        square
        :display-value="`${status ? status : 'Status'}`"
      >
        <template v-slot:append>
          <q-icon
            v-if="status !== null"
            class="cursor-pointer"
            name="clear"
            @click.stop.prevent="status = null"
          />
        </template>
      </q-select>
      <q-select
        v-model="substatus"
        bg-color="white"
        outlined
        dense
        square
        :options="options"
        :display-value="`${substatus ? substatus : 'Sub status'}`"
      >
        <template v-slot:append>
          <q-icon
            v-if="substatus !== null"
            class="cursor-pointer"
            name="clear"
            @click.stop.prevent="substatus = null"
          />
        </template>
      </q-select>
    </div>
    <q-space></q-space>
    <q-btn square unelevated color="blue-10" no-caps>Apply filters</q-btn>
  </q-toolbar>
</template>
