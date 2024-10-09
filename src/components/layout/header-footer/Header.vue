<template>
  <div class="flex items-center justify-between rounded border-b-2">
    <!-- LEFT -->
    <div class="flex items-center">
      <!-- <img class="sm:ml-8 h-14 md:h-24" src="@assets/img/logo.png" alt="App" /> -->
      <div class="flex max-w-[180px] sm:max-w-full">
        <span class="text-normal text-xs md:text-base ml-4">
          LAZER.IO: A Constitutional AI Framework
        </span>
      </div>
    </div>

    <ThemeToggle />

    <!-- CONDITIONAL NAVIGATION -->
    <div v-if="isAuthenticated" class="flex items-center sm:mr-8">
      <TopNavigation />
      <ProfileButton />
    </div>

    <!-- CONDITIONAL LOGIN -->
    <div v-else class="flex items-center">
      <LoginButton v-if="!isAuthenticated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

import TopNavigation from "@components/layout/left-top/LeftNavigation.vue";
import ThemeToggle from "@components/ThemeToggle.vue";
import LoginButton from "@components/identity/LoginButton.vue";
import ProfileButton from "@components/identity/ProfileButton.vue";

const { isAuthenticated } = useAuth0();
</script>
