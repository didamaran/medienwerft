<script setup lang="ts">
  import MenuItem from "./MenuItem.vue";

  const items = [
    { label: "Books", link: "/" },
    { label: "Favoriten", link: "/favoriten" }
  ];
</script>

<template>
  <nav class="mainnav">
    <MenuItem v-for="(item, index) in items" :key="index" :item="item" />
  </nav>
</template>

<style scoped>
  .mainnav {
    display: flex;
    justify-content: flex-end;
  }
</style>
