<template>
  <div class="flex justify-center align-middle px-6 lg:px-8 py-6 sm:py-8">
    <div class="flex flex-col items-center">
      <img
        class="mt-4 h-auto max-w-full"
        src="../assets/img/logo-small.ico"
        alt="MeOH Mission and Vision"
      />
      <h2 class="mb-16 font-light tracking-tight text-gray-900 text-2xl sm:text-3xl">
        Bridge between electron and molecule
      </h2>

      <LoginButtonBig v-if="!isAuthenticated" />

      <!-- <img
        class="mt-4 h-auto max-w-full"
        src="../assets/img/1-mission_vision.jpeg"
        alt="MeOH Mission and Vision"
      />
      <img
        class="mt-4 h-auto max-w-full"
        src="../assets/img/2-what_we_do.jpeg"
        alt="What We Do"
      />
      <img
        class="mt-4 h-auto max-w-full"
        src="../assets/img/3-why_maritime.jpeg"
        alt="Why Maritime?"
      />
      <img
        class="mt-4 h-auto max-w-full"
        src="../assets/img/4-how_to_solve.jpeg"
        alt="How To Solve"
      /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LoginButtonBig from "@components/identity/LoginButtonBig.vue";

const { isAuthenticated } = useAuth0();
</script>
