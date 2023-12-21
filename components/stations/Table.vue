<script lang="ts" setup>
const columns = [
  {
    name: "station",
    align: "left",
    label: "Station",
    field: "station",
    sortable: true,
  },
  {
    name: "location",
    label: "Location",
    field: "location",
    sortable: true,
    align: "left",
  },
  {
    name: "status",
    label: "Status",
    field: "status",
    sortable: true,
    align: "center",
  },
  {
    name: "isActive",
    label: "Active",
    field: "isActive",
    align: "center",
    sortable: true,
  },
  {
    name: "subStatus",
    label: "State",
    field: "subStatus",
    align: "center",
    sortable: true,
  },
  {
    name: "temp",
    align: "center",
    label: "Temp",
    field: "temp",
  },
  {
    name: "pressure",
    align: "center",
    label: "Pressure",
    field: "pressure",
  },
  {
    name: "pv",
    align: "center",
    label: "PV",
    field: "pv",
  },
  { name: "last_ts", label: "Last DB ts", field: "last_ts", align: "center" },
  {
    name: "installation_date",
    align: "center",
    label: "Installation date",
    field: "installation_date",
  },
  {
    name: "actions",
    align: "center",
    label: "",
    field: "actions",
  },
];
const rows = [
  {
    station: "STA-06-0026",
    location: "Argolida 5",
    status: "online",
    isActive: true,
    subStatus: "operational",
    temp: [],
    pressure: [],
    last_ts: "2023-12-01",
    installation_date: "2023-12-01",
  },
  {
    station: "STA-06-0026",
    location: "Argolida 5",
    status: "offline",
    isActive: false,
    subStatus: "lab",
    temp: [],
    pressure: [],
    last_ts: "2023-12-01",
    installation_date: "2023-12-01",
  },
  {
    station: "STA-06-0026",
    location: "Argolida 5",
    status: "offline",
    isActive: false,
    subStatus: "installation",
    temp: [],
    pressure: [],
    last_ts: "2023-12-01",
    installation_date: "2023-12-01",
  },
];
</script>

<template>
  <div class="row">
    <div class="col-12 q-px-md">
      <q-card flat square>
        <q-table flat :rows="rows" :columns="columns" row-key="station">
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="station" :props="props">
                <router-link :to="{ name: 'expoler' }" class="text-black">
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
