<template>
  <button @click="toggleDark()">
    <span class="text-pop-secondary text-xs"
      >{{ isDark ? "Go Light" : "Go Dark" }} Theme</span
    >
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
