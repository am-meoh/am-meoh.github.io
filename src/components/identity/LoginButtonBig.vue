<template>
  <button
    class="bg-indigo-800 hover:bg-white text-white hover:text-black text-8xl hover:border-transparent rounded-3xl py-8 px-40"
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
