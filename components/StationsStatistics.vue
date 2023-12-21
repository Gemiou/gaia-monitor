<script lang="ts" setup></script>

<template>
  <q-card flat square>
    <q-card-section>
      <div class="text-weight-bold">Stations statistics</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="row">
        <div class="col-12">
          <div>
            <div>Total</div>
            <div class="text-h5">320</div>
          </div>
          <q-separator class="q-my-sm"></q-separator>
          <div class="flex q-gutter-lg">
            <div>
              <div>Status</div>
              <q-chip
                size="12px"
                square
                color="black"
                text-color="white"
                icon-right="wifi"
                class="text-capitalize text-weight-bold"
              >
                10
              </q-chip>
              <q-chip
                square
                size="12px"
                color="black"
                text-color="white"
                icon-right="wifi_off"
                class="text-capitalize text-weight-bold"
              >
                20</q-chip
              >
            </div>
            <div>
              <div>Active</div>
              <q-chip
                size="12px"
                square
                color="black"
                text-color="white"
                icon-right="podcasts"
                class="text-capitalize text-weight-bold"
              >
                10
              </q-chip>
              <q-chip
                size="12px"
                square
                color="black"
                text-color="white"
                icon-right="portable_wifi_off"
                class="text-capitalize text-weight-bold"
              >
                20
              </q-chip>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
