<script lang="ts" setup>
definePageMeta({
  name: "forgot",
  path: "/forgot",
  title: "Forgot",
  layout: "auth",
});
const email = ref("");
const password = ref("");
</script>

<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="q-pa-md shadow-2 login_card">
      <q-card-section class="text-center">
        <div class="text-grey-9 text-h5 text-weight-bold">Forgot Password</div>
      </q-card-section>
      <q-card-section>
        <q-input dense outlined v-model="email" label="Email Address"></q-input>
        <q-input
          dense
          outlined
          class="q-mt-md"
          v-model="password"
          type="password"
          label="Password"
        ></q-input>
      </q-card-section>
      <q-card-section>
        <q-btn
          style="border-radius: 8px"
          color="dark"
          rounded
          size="md"
          label="Sign in"
          no-caps
          class="full-width"
        ></q-btn>
      </q-card-section>
      <q-card-section class="text-center q-pt-none">
        <div class="text-grey-8">
          Don't have an account yet?
          <q-btn flat no-caps class="text-dark text-weight-bold"
            >Forgot password</q-btn
          >
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
