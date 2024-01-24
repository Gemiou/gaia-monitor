<script lang="ts" setup>
definePageMeta({
  name: "logs",
  title: "Logs",
  path: "/logs",
  layout: "default",
});
const status_name = ref("");
const logs_name = ref("");
const status = ref("");
const levels = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<template>
  <q-page>
    <page-title
      title="Logs"
      synchronize_at=" 12/20/2020 - 12:00:00"
    ></page-title>
    <q-toolbar dense style="min-height: 60px !important">
      <div class="flex q-gutter-sm">
        <q-input
          placeholder="Log id"
          bg-color="white"
          outlined
          dense
          square
          v-model="status_name"
        >
          <template v-slot:append>
            <q-icon
              v-if="status_name !== ''"
              name="close"
              @click="status_name = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>
        </q-input>
        <q-input
          placeholder="Status name"
          bg-color="white"
          outlined
          dense
          square
          v-model="logs_name"
        >
          <template v-slot:append>
            <q-icon
              v-if="logs_name !== ''"
              name="close"
              @click="logs_name = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>
        </q-input>
        <q-select
          v-model="status"
          :options="levels"
          bg-color="white"
          outlined
          dense
          square
          :display-value="`${status ? status : 'Level'}`"
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
      </div>
      <q-space></q-space>
      <q-btn square unelevated color="blue-10" no-caps>Apply filters</q-btn>
    </q-toolbar>
    <div class="row q-px-md q-col-gutter-lg">
      <div class="col-4">
        <logs-list></logs-list>
      </div>
      <div class="col-8">
        <logs-table></logs-table>
        <logs-terminal class="q-mt-sm"></logs-terminal>
      </div>
    </div>
  </q-page>
</template>
