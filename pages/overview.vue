<script lang="ts" setup>
definePageMeta({
  name: "overview",
  path: "/overview",
  title: "Overview",
  layout: "default",
});
</script>

<template>
  <q-page>
    <page-title
      title="Overview"
      synchronize_at=" 12/20/2020 - 12:00:00"
    ></page-title>
    <div class="row q-mt-md q-px-md">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <overview-counter></overview-counter>
      </div>
    </div>
    <div class="row q-mt-xs q-px-md q-col-gutter-lg">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
        <overview-map></overview-map>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <overview-transmission-pie></overview-transmission-pie>
        <overview-range-bar class="q-mt-md"></overview-range-bar>
      </div>
    </div>
  </q-page>
</template>
