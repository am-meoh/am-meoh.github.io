<template>
  <button
    class="bg-slate-400 hover:bg-indigo-800 text-indigo-800 hover:text-slate-400 text-7xl hover:border-transparent rounded-2xl w-96 h-36"
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
