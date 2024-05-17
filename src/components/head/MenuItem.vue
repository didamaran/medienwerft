<script setup lang="ts">
  import { defineProps, computed } from "vue";
  import { useRoute } from "vue-router";
  import useBookStore from "@/store/books";

  const bookStore = useBookStore();

  const props = defineProps({
    item: { type: Object, required: true }
  });

  const route = useRoute();
  const classes = computed(() => {
    const classArray = ["mainnav-link"];
    if (route.path === props.item.link) {
      classArray.push("mainnav-link--active");
    }
    return classArray;
  });
</script>

<template>
  <router-link :to="item.link" :class="classes">
    {{ item.label }}
    <span v-if="item.label === 'Favoriten' && bookStore.favorites" class="mainnav-number">{{
      bookStore.favorites.length
    }}</span>
  </router-link>
</template>

<style scoped>
  .mainnav-link {
    margin: 0 10px;
    line-height: 4.7rem;
    color: var(--secondary);
    border-bottom: 3px solid transparent;
    cursor: pointer;
    text-decoration: none;
  }

  .mainnav-link:hover {
    color: var(--primary);
  }

  .mainnav-link.mainnav-link--active {
    color: var(--primary);
    border-bottom-color: var(--primary);
  }

  .mainnav-number {
    background-color: var(--primary);
    color: #f4f5f6;
    padding: 0 5px;
    border-radius: 50%;
  }
</style>
