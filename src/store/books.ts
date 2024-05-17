import { defineStore } from "pinia";
import { Book } from "@/types";

interface State {
  books: Book[];
  favorites: Book[];
}

const useBookStore = defineStore("BookStore", {
  state: (): State => {
    return {
      books: [],
      favorites: []
    };
  },
  getters: {
    publishers(state): string[] {
      return [...new Set(state.books.map((book) => book.publisher))];
    }
  },
  persist: true
});

export default useBookStore;
