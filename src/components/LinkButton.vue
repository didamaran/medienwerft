<script setup lang="ts">
  import { defineProps } from "vue";

  defineProps<{
    to: string;
  }>();
</script>

<template>
  <router-link :to="to" class="link">
    <slot />
  </router-link>
</template>

<style scoped>
  a {
    display: inline-block;
    background-color: transparent;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--primary);
    border-radius: 5px;
    padding: 6px 20px;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--primary);
  }
  a:hover {
    color: var(--secondary);
    border-color: var(--secondary);
  }
</style>
