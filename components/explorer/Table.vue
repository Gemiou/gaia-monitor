<script lang="ts" setup>
import { useExplorerStore } from "~/store/explorer";
const explorerStore = useExplorerStore();
const loadingStations = ref(true);
explorerStore.setStations().then(() => {
  loadingStations.value = false;
});
</script>

<template>
  <div class="row">
    <div class="col-12 q-px-md q-mb-md">
      <q-markup-table flat v-if="loadingStations">
        <thead>
          <tr>
            <th class="text-left" style="width: 150px">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
            <th class="text-right">
              <q-skeleton animation="blink" type="text" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="n in 5" :key="n">
            <td class="text-left">
              <q-skeleton animation="blink" type="text" width="85px" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" width="50px" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" width="35px" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" width="65px" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" width="25px" />
            </td>
            <td class="text-right">
              <q-skeleton animation="blink" type="text" width="85px" />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <q-card flat square v-if="!loadingStations" class="q-pa-md">
        <q-table
          :grid="$q.screen.xs"
          flat
          dense
          :bordered="$q.screen.xs"
          hide-pagination
          :rows-per-page-options="[10]"
          :columns="explorerStore.getTableColumns"
          :rows="explorerStore.getStations"
          row-key="station"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="text-h6 bg-grey-2"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="station" :props="props">
                <router-link
                  :to="{ name: 'station', params: { id: props.row.station } }"
                  class="text-black"
                >
                  {{ props.row.station }}
                </router-link>
              </q-td>
              <q-td key="location" :props="props">
                {{ props.row.location }}
              </q-td>
              <q-td key="status" :props="props" auto-width>
                <q-chip
                  dense
                  :icon="props.row.status === 'online' ? 'wifi' : 'wifi_off'"
                  :text-color="props.row.status === 'online' ? 'green' : 'red'"
                  square
                  class="text-capitalize bg-transparent"
                >
                  {{ props.row.status }}
                </q-chip>
              </q-td>
              <q-td key="isActive" :props="props">
                <q-chip
                  :icon="props.row.isActive ? 'podcasts' : 'portable_wifi_off'"
                  :text-color="props.row.isActive ? 'green' : 'red'"
                  square
                  class="text-capitalize bg-transparent"
                  dense
                >
                  {{ props.row.isActive ? "Active" : "Inactive" }}
                </q-chip>
              </q-td>
              <q-td key="subStatus" :props="props">
                <q-chip
                  text-color="black"
                  square
                  class="text-capitalize bg-transparent"
                  dense
                >
                  {{ props.row.subStatus }}
                </q-chip>
              </q-td>

              <q-td key="last_ts" :props="props">
                {{ props.row.last_ts }}
              </q-td>
              <q-td key="installation_date" :props="props">
                {{ props.row.installation_date }}
              </q-td>
              <q-td key="actions" :props="props">
                <q-btn round flat color="black" icon="location_searching">
                </q-btn>
                <q-btn round flat color="black" icon="visibility"> </q-btn>
              </q-td>
            </q-tr>
          </template>

          <template #bottom>
            <div class="flex justify-between full-width q-pt-sm">
              <div>
                <span class="text-primary text-body1">Total:</span>
                <span class="q-ml-xs text-weight-bold text-body1"> 100</span>
              </div>
              <div class="q-gutter-x-md flex">
                <div>
                  <span class="q-mx-sm text-primary text-body1">
                    2 of <span class="text-weight-bold">20 page</span></span
                  >
                </div>
                <q-separator vertical></q-separator>
                <div class="q-gutter-x-xs">
                  <q-btn
                    icon="first_page"
                    color="black"
                    size="xs"
                    round
                    unelevated
                  />
                  <q-btn
                    icon="chevron_left"
                    color="black"
                    size="xs"
                    round
                    unelevated
                  />
                  <q-btn
                    icon="chevron_right"
                    color="black"
                    size="xs"
                    round
                    unelevated
                  />
                  <q-btn
                    icon="last_page"
                    color="black"
                    size="xs"
                    round
                    unelevated
                  />
                </div>
              </div>
            </div>
          </template>
        </q-table>
      </q-card>
    </div>
  </div>
</template>
