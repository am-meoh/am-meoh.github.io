<template>
  <div class="min-h-screen bg-slate-200">
    <div v-if="isLoading" class="flex items-center justify-center">
      <LoadingSpinner />
    </div>
    <div v-else>
      <GlobalHeader />
      <router-view v-if="!isLoading" />
    </div>
  </div>

  <footer class="flex items-center justify-center bg-indigo-800 h-16 pr-5">
    <div class="text-white">Copyright © MeOH</div>
  </footer>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

import GlobalHeader from "@components/GlobalHeader.vue";
import LoadingSpinner from "@components/LoadingSpinner.vue";

const { isLoading } = useAuth0();
</script>
