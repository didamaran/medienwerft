<script setup lang="ts">
  import Logo from "./Logo.vue";
  import Navigation from "./Navigation.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <Logo />
      <Navigation />
    </div>
  </header>
</template>

<style>
  .header {
    background: #f4f5f6;
    padding-top: 25px;
    margin-bottom: 40px;
  }
  .container {
    max-width: var(--max-container-width);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
</style>
