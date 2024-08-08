<template>
  <button
    class="bg-transparent hover:bg-white text-white hover:text-black text-xl py-2 px-8 mr-4 hover:border-transparent rounded"
    @click="handleLogin"
  >
    Log In
  </button>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/home",
    },
    authorizationParams: {
      prompt: "login",
    },
  });
};
</script>
