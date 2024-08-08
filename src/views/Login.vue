<template>
  <div class="flex h-screen justify-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="flex flex-col items-center mt-4">
      <h1 class="text-4xl sm:text-5xl font-bold mb-4">
        Welcome to MeÖH App
      </h1>
      <LoginButton v-if="!isAuthenticated" />
    </div>
  </div>
</template>
<script setup lang="ts">
import LoginButton from "@components/identity/LoginButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();
</script>
