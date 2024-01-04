<script lang="ts" setup>
const expandedCounter = ref(true);
</script>

<template>
  <q-expansion-item
    expand-separator
    v-model="expandedCounter"
    label="Stations statistics"
    class="bg-white text-weight-bold"
  >
    <q-card flat square style="height: 230px">
      <q-card-section>
        <div class="row">
          <div class="col-12">
            <div class="text-h5 text-weight-light">
              Total:<span class="text-h5 text-weight-medium"> 320</span>
            </div>
            <q-separator class="q-my-md"></q-separator>
            <div class="flex col-q-gutter-lg">
              <div class="q-mr-lg">
                <div class="text-weight-bold">Status</div>
                <q-chip
                  size="14px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  10 Online
                </q-chip>
                <q-chip
                  square
                  size="14px"
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  20 Offline</q-chip
                >
              </div>
              <div>
                <div class="text-weight-bold">Active</div>
                <q-chip
                  size="14px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  10 Yes
                </q-chip>
                <q-chip
                  size="14px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  20 No
                </q-chip>
              </div>
              <div class="q-mt-sm">
                <div class="text-weight-bold">State</div>
                <q-chip
                  size="14px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  10 operational
                </q-chip>
                <q-chip
                  size="14px"
                  square
                  color="black"
                  text-color="white"
                  class="text-capitalize text-weight-bold"
                >
                  20 lab
                </q-chip>
                <q-chip
                  size="14px"
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
