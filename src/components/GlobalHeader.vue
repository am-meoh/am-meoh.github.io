<template>
  <div class="flex p-4 items-center justify-between bg-indigo-800 rounded">
    <!-- LEFT -->
    <div class="flex items-center">
      <img class="ml-8 h-12" src="../assets/img/logo-small.ico" alt="MeOH" />
      <div>
        <span class="text-white text-xl ml-4">Welcome to MeÖH!</span>
      </div>
    </div>

    <!-- CONDITIONAL NAVIGATION -->
    <div v-if="isAuthenticated" class="flex items-center">
      <TopNavigation v-show="showTopNavigation" />
      <LogoutButtonWithProfile v-if="isAuthenticated" />
    </div>

    <!-- CONDITIONAL LOGIN -->
    <div v-else class="flex items-center">
      <LoginButton v-if="!isAuthenticated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

import LoginButton from "@components/identity/LoginButton.vue";
import TopNavigation from "@components/TopNavigation.vue";
import LogoutButtonWithProfile from "@components/identity/LogoutButtonWithProfile.vue";

const { isAuthenticated } = useAuth0();
const showTopNavigation = ref(false);
</script>
