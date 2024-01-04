<script lang="ts" setup>
import { useStationsStore } from "~/store/stations";
const stationsStore = useStationsStore();
const loadingStations = ref(true);
stationsStore.setStations().then(() => {
  loadingStations.value = false;
});
</script>

<template>
  <div class="row">
    <div class="col-12 q-px-md">
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
      <q-card flat square v-else>
        <q-table
          flat
          :columns="stationsStore.getTableColumns"
          :rows="stationsStore.getStations"
          row-key="station"
        >
          <template v-slot:top="props">
            <span class="text-weight-bold">Stations</span>
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
                  {{ props.row.isActive ? "Yes" : "No" }}
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
        </q-table>
      </q-card>
    </div>
  </div>
</template>
