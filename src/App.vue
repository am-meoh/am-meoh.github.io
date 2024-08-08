<template>
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
  <div v-else class="min-h-screen">
    <div>
      <header class="flex h-14 items-center justify-between bg-indigo-800 pr-5">
        <GlobalHeader />
      </header>
    </div>
    <router-view v-if="!isLoading" />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

import GlobalHeader from "@components/shared/GlobalHeader.vue";
import LoadingSpinner from "@components/shared/LoadingSpinner.vue";

const { isLoading } = useAuth0();
</script>
