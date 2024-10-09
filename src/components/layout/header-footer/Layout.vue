<template>
  <div class="h-screen flex items-center justify-center">
    <LeftNavigation />

    <div class="flex-grow">
      <main :class="isAuthenticated ? 'py-10 lg:pl-72' : 'p-0'">
        <router-view v-if="!isLoading" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LeftNavigation from "@components/layout/left-top/LeftNavigation.vue";

const { isLoading, isAuthenticated } = useAuth0();
</script>
