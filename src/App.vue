<template>
  <div class="flex flex-col min-h-screen">
    <header class="sticky z-50 top-0 p-4">
      <GlobalHeader />
    </header>

    <div class="flex-grow">
      <main>
        <router-view v-if="!isLoading" />
      </main>
    </div>

    <footer class="sticky z-50 bottom-0 p-4">
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

import Footer from "@components/Footer.vue";
import GlobalHeader from "@components/GlobalHeader.vue";

const { isLoading } = useAuth0();
</script>
