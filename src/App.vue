<script setup lang="ts">
  import "@fontsource/roboto";
  import { onMounted } from "vue";
  import request from "./http/service";
  import AppHeader from "./components/head/AppHeader.vue";
  import useBookStore from "@/store/books";

  const bookStore = useBookStore();
  onMounted(async () => {
    const response = await request();
    if (response) bookStore.books = [...response];
  });
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style>
  :root {
    --primary: #9b4dca;
    --secondary: #606c76;
    --max-container-width: 60rem;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: #606c76;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 0.01em;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  main .fav-btn {
    padding: 0;
    margin-bottom: -45px;
  }

  .fav {
    width: 100%;
    height: 100%;
  }

  .first-col {
    width: 5%;
  }
</style>
