<template>
  <div class="flex flex-col items-center px-6 lg:px-8 py-6 sm:py-32 ">
    <img
      class="mt-4 h-auto max-w-full"
      src="../assets/img/logo-small.ico"
      alt="MeOH Mission and Vision"
    />
    <h2 class="mb-16 font-light tracking-tight text-xl sm:text-xl text-slate-600 font-mono">
      Bridge between electron and molecule
    </h2>

    <LoginButtonBig v-if="!isAuthenticated" />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LoginButtonBig from "@components/identity/LoginButtonBig.vue";

const { isAuthenticated } = useAuth0();
</script>
