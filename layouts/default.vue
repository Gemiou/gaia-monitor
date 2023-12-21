<script lang="ts" setup>
const route = useRoute();
const leftDrawerOpen = ref(true);
const miniDrawer = ref(false);
const text = ref("");
</script>

<template>
  <q-layout view="hHh LpR fFf" class="body">
    <q-header class="header text-white">
      <q-toolbar class="q-pa-sm">
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="q-mr-sm"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-separator vertical color="white"></q-separator>
        <span class="q-px-md">Monitor Stations</span>
        <q-separator vertical color="white" class="q-mx-md"></q-separator>
        <q-input
          v-model="text"
          bg-color="white"
          square
          dense
          input-class="q-px-lg"
          placeholder="Station name or location"
        >
          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" class="q-pr-md" />
          </template>
        </q-input>
        <q-space></q-space>

        <q-btn dense icon="notifications" flat stretch>
          <q-badge color="blue-9" rounded></q-badge>
        </q-btn>

        <q-btn icon="expand_more" stretch flat>
          <q-menu square>
            <q-list style="min-width: 100px" class="layout_color text-white">
              <q-item clickable v-close-popup>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Cookies preferences</q-item-section>
              </q-item>
              <q-separator color="white" />
              <q-item clickable v-close-popup>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      :mini="miniDrawer"
      show-if-above
      :width="220"
      v-model="leftDrawerOpen"
      bordered
      class="sidebar"
    >
      <q-scroll-area class="fit">
        <q-list padding class="rounded-borders text-white">
          <q-item
            clickable
            v-ripple
            exact
            :to="{ name: 'stations' }"
            :active="route.name === 'stations'"
            active-class="active-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="sensors" />
            </q-item-section>
            <q-item-section> Stations </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            exact
            :to="{ name: 'expoler' }"
            :active="route.name === 'expoler'"
            active-class="active-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="public" />
            </q-item-section>
            <q-item-section> Expoler</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="terminal" />
            </q-item-section>
            <q-item-section> Console </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="notifications" />
            </q-item-section>
            <q-item-section> Alerts </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section> Calendar </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <div class="absolute-bottom bg-transparent">
        <q-list bordered class="rounded-borders text-white">
          <q-item
            clickable
            v-ripple
            class="bg-grey-9"
            @click="miniDrawer = !miniDrawer"
          >
            <q-item-section avatar>
              <q-icon
                :name="miniDrawer ? 'open_in_full' : 'close_fullscreen'"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
