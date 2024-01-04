<script lang="ts" setup>
import { useStationsStore } from "~/store/stations";
const stationsStore = useStationsStore();
const loadingStations = ref(true);
const station_name = ref("");
stationsStore.setStations().then(() => {
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
      <q-card flat square v-if="!loadingStations">
        <q-table
          :grid="$q.screen.xs"
          flat
          dense
          :bordered="$q.screen.xs"
          hide-pagination
          :rows-per-page-options="[10]"
          :columns="stationsStore.getTableColumns"
          :rows="stationsStore.getStations"
          row-key="station"
        >
          <template #top>
            <span class="text-weight-bold q-mr-md">Stations</span>
            <q-input
              placeholder="Type station name"
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
            <q-space></q-space>
            <q-btn
              square
              flat
              color="black"
              no-caps
              icon="tune"
              @click="stationsStore.setFiltersDialogState"
            >
            </q-btn>
            <q-btn square unelevated color="blue-10" no-caps>
              Export CSV
            </q-btn>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="station" :props="props">
                <router-link :to="{ name: 'explorer' }" class="text-black">
                  {{ props.row.station }}
                </router-link>
              </q-td>
              <q-td key="location" :props="props">
                {{ props.row.location }}
              </q-td>
              <q-td key="status" :props="props" auto-width>
                <q-chip
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
              <q-td key="temp" :props="props">
                <charts-spline></charts-spline
              ></q-td>
              <q-td key="pressure" :props="props">
                <charts-spline></charts-spline>
              </q-td>
              <q-td key="pv" :props="props">
                <charts-spline></charts-spline>
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
            <div class="flex justify-between full-width q-pa-sm">
              <div>
                <span class="text-primary">Total:</span>
                <span class="q-ml-xs text-weight-bold"> 100</span>
              </div>
              <div class="q-gutter-x-xs">
                <span class="q-ml-sm text-primary">Page:</span>
                <span class="q-mx-sm text-primary"> 2 / 20</span>

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
          </template>
        </q-table>
      </q-card>
    </div>
  </div>
</template>
