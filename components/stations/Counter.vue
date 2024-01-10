<script lang="ts" setup></script>

<template>
  <div class="row q-col-gutter-md">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-2">
      <q-card flat square class="q-pa-lg card_stat_border">
        <div class="text-weight-medium text-body1">Stations</div>

        <div class="text-h4 text-weight-light">
          320
          <span class="text-h6 text-weight-light text-gray-700">Total</span>
        </div>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
      <q-card flat square class="q-pa-lg card_stat_border">
        <div class="text-weight-medium text-body1">Status</div>

        <div class="flex q-gutter-lg">
          <div class="text-h4 text-weight-light">
            300
            <span class="text-h6 text-weight-light text-gray-700">Online</span>
          </div>
          <div class="text-h4 text-weight-light">
            20
            <span class="text-h6 text-weight-light text-gray-700">Offline</span>
          </div>
        </div>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
      <q-card flat square class="q-pa-lg card_stat_border">
        <div class="text-weight-medium text-body1">Active</div>

        <div class="flex q-gutter-lg">
          <div class="text-h4 text-weight-light">
            300
            <span class="text-h6 text-weight-light text-gray-700">Active</span>
          </div>
          <div class="text-h4 text-weight-light">
            20
            <span class="text-h6 text-weight-light text-gray-700"
              >Inactive</span
            >
          </div>
        </div>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <q-card flat square class="q-pa-lg card_stat_border">
        <div class="text-weight-medium text-body1">State</div>
        <div class="flex q-gutter-lg">
          <div class="text-h4 text-weight-light">
            300
            <span class="text-h6 text-weight-light text-gray-700"
              >operational</span
            >
          </div>
          <div class="text-h4 text-weight-light">
            20
            <span class="text-h6 text-weight-light text-gray-700">Lab</span>
          </div>
          <div class="text-h4 text-weight-light">
            0
            <span class="text-h6 text-weight-light text-gray-700"
              >Installation</span
            >
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
