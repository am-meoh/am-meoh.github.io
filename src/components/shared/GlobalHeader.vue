<template>
  <div class="flex items-center">
    <img class="ml-4 h-12" src="../../assets/img/logo-small.ico" alt="MeOH" />
    <div>
      <span class="text-white text-xl ml-4">MeOH User Registry</span>
    </div>
  </div>
  <div class="flex items-center">
    <button
      v-if="isAuthenticated"
      class="ml-8 w-200 bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 hover:border-transparent rounded"
    >
      <a href="/home">Home</a>
    </button>

    <button
      v-if="isAuthenticated"
      class="ml-8 w-200 bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 hover:border-transparent rounded"
    >
      <a href="/profile">My Profile</a>
    </button>

    <LogoutButtonWithProfile v-if="isAuthenticated" />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LogoutButtonWithProfile from "@components/identity/LogoutButtonWithProfile.vue";

const { isAuthenticated } = useAuth0();
</script>
