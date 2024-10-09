<template>
  <main
    v-if="isAuthenticated"
    class="grid min-h-full place-items-center bg-primary px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <h1
        class="mt-4 text-3xl font-bold tracking-tight text-normal sm:text-5xl"
      >
        Uh Oh
      </h1>
      <p class="mt-6 text-xl leading-7 text-normal">
        You don't have access to this application
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button
          class="flex items-center text-normal text-2xl p-2 bg-primary px-4 rounded-md"
          @click="logoutUser"
        >
          Back to Login
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated, logout } = useAuth0();

const logoutUser = () => {
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};
</script>
