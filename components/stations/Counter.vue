<script lang="ts" setup>
const expandedCounter = ref(true);
</script>

<template>
  <q-expansion-item
    expand-separator
    v-model="expandedCounter"
    label="Stations statistics"
    class="bg-white"
  >
    <q-card flat square style="height: 230px">
      <q-card-section>
        <div class="row">
          <div class="col-12">
            <div>
              <div>Total</div>
              <div class="text-h5">320</div>
            </div>
            <q-separator class="q-my-sm"></q-separator>
            <div class="flex col-q-gutter-lg">
              <div class="q-mr-lg">
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
              <div>
                <div>State</div>
                <q-chip
                  size="12px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  10 operational
                </q-chip>
                <q-chip
                  size="12px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  20 lab
                </q-chip>
                <q-chip
                  size="12px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  20 installation
                </q-chip>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
