<script setup lang="ts">
  import { ref, computed } from "vue";
  import useBookStore from "@/store/books";
  import { Book } from "@/types";

  const bookStore = useBookStore();

  const numOfBooks = ref(2);
  const filterTitle = ref("");
  const filterPublisher = ref("");

  const addToFavorites = (book: Book) => {
    if (!bookStore.favorites.includes(book)) {
      bookStore.favorites.push(book);
    }
  };
  const filteredBooks = computed(() => {
    if (filterTitle.value || filterPublisher.value) {
      return bookStore.favorites.filter(
        (book) => book.title.includes(filterTitle.value.toLowerCase()) && book.publisher.includes(filterPublisher.value)
      );
    }
    return bookStore.favorites;
  });
</script>

<template>
  <div class="content">
    <h1>{{ numOfBooks }} Books displayed</h1>
    <div class="filter">
      <div>
        <label>Search by Title</label>
        <input v-model="filterTitle" type="text" placeholder="Filter by title" />
      </div>
      <div>
        <label>Filter by Publisher</label>
        <select v-model="filterPublisher">
          <option value=""></option>
          <option v-for="(publisher, index) in bookStore.publishers" :key="index" :value="publisher">
            {{ publisher }}
          </option>
        </select>
      </div>
    </div>
    <BooksTable :books="filteredBooks" @add-to-favorites="addToFavorites" />
  </div>
</template>

<style scoped>
  .content {
    max-width: var(--max-container-width);
    margin: 0 auto;
  }
  .filter {
    display: grid;
    gap: 10px;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
  input,
  select {
    width: 90%;
    padding: 10px;
    border: 1px solid #f4f5f6;
    background: #fff;
  }
  label {
    font-weight: bold;
    display: block;
  }
  table {
    width: 100%;
  }
  td,
  th {
    padding: 10px;
    border-bottom: 1px solid #f4f5f6;
  }
  svg {
    width: 36px;
    height: 26px;
    cursor: pointer;
    color: var(--secondary);
  }
</style>
