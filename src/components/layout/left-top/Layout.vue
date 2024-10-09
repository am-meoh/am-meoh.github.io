<template>
  <div>
    <div v-if="isAuthenticated">
      <LeftNavigation />
    </div>

    <main class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <router-view v-if="!isLoading" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LeftNavigation from "@components/layout/left-top/LeftNavigation.vue";

const { isLoading, isAuthenticated } = useAuth0();
</script>
