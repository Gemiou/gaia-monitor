<script lang="ts" setup></script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row bg-bg">
        <div class="col-md-6 col-xs-12">
          <slot />
        </div>
        <div class="col-md-6 sm-hide xs-hide"></div>
      </div>
    </q-page-container>
  </q-layout>
</template>
