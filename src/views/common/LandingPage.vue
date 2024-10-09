<template>
  <div
    v-if="!isAuthenticated"
    class="flex flex-col h-[90vh] items-center justify-center"
  >
    <img src="@assets/img/logo.png" alt="logo" class="m-8 h-64" />
    <LoginButton />

    <div class="my-8">
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LoginButton from "@components/identity/LoginButton.vue";
import ThemeToggle from "@components/ThemeToggle.vue";

const { isAuthenticated } = useAuth0();
</script>
