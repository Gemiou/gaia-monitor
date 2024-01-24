<script lang="ts" setup>
definePageMeta({
  name: "explorer",
  path: "/explorer",
  title: "Explorer",
  layout: "default",
});
</script>

<template>
  <q-page>
    <page-title
      title="Explorer"
      synchronize_at=" 12/20/2020 - 12:00:00"
    ></page-title>
    <explorer-filters-toolbar></explorer-filters-toolbar>
    <div class="row">
      <div class="col-6">
        <explorer-table></explorer-table>
      </div>
      <div class="col-6">
        <explorer-map></explorer-map>
      </div>
    </div>
  </q-page>
</template>
