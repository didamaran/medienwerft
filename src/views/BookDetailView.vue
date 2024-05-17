<script setup lang="ts">
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { Book } from "@/types";
  import useBookStore from "@/store/books";
  import LinkButton from "@/components/LinkButton.vue";

  const route = useRoute();
  const bookStore = useBookStore();
  const currentBook = computed((): Book => {
    return bookStore.books.filter((book) => book.id === route.params.id)[0];
  });
</script>

<template>
  <div class="content">
    <h1>
      {{ currentBook.title }}<br />
      <small>{{ currentBook.subtitle }}</small>
    </h1>
    <section class="row">
      <div class="column column-67">
        <h3>Abstract</h3>
        <p>
          {{ currentBook.abstract }}
        </p>

        <h4>Details</h4>
        <ul>
          <li><strong>Author:</strong> {{ currentBook.author }}</li>
          <li><strong>Publisher:</strong> {{ currentBook.publisher }}</li>
          <li><strong>Pages:</strong> {{ currentBook.numPages }}</li>
        </ul>

        <LinkButton to="/">Back</LinkButton>
      </div>
      <div class="column column-33">
        <img src="images/1001606140805.png" alt="" />
      </div>
    </section>
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
</style>
