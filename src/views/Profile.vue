<template>
  <div
    v-if="!isLoading"
    class="flex h-full items-center justify-center align-middle text-xl sm:text-2xl"
  >
    <p class="max-w-[300px] sm:max-w-full text-center">
      Hello {{ user.name }}. You are Profiled In!
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { user, isLoading } = useAuth0();
</script>
