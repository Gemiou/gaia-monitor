<script lang="ts" setup>
const leftDrawerOpen = ref(true);
const text = ref("");
const menulink = ref("overview");
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
        <span class="q-px-lg">Gaiasense</span>
        <q-separator vertical color="white"></q-separator>
        <span class="q-px-lg">Monitor Stations</span>

        <q-space></q-space>

        <q-input
          v-model="text"
          bg-color="white"
          square
          dense
          input-class=" q-px-lg"
          placeholder="Station name"
        >
          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" class="q-pr-md" /> </template
        ></q-input>
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
      show-if-above
      :width="250"
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="sidebar"
    >
      <q-scroll-area class="fit">
        <q-list bordered padding class="rounded-borders text-white">
          <q-item
            clickable
            v-ripple
            exact
            :to="{ name: 'overview' }"
            :active="menulink === 'overview'"
            @click="menulink = 'overview'"
            active-class="active-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section> Overview </q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            exact
            :to="{ name: 'stations' }"
            :active="menulink === 'stations'"
            @click="menulink = 'stations'"
            active-class="active-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="sensors" />
            </q-item-section>
            <q-item-section> Stations </q-item-section>
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
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">Razvan Stoenescu</div>
        <div>@rstoenescu</div>
      </div>
    </q-drawer>
    <q-page-container>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
