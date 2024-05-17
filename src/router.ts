import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import BooksView from "./views/BooksView.vue";
import BookDetailView from "./views/BookDetailView.vue";
import FavoritesView from "./views/FavoritesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Books",
    component: BooksView
  },
  {
    path: "/book/:id",
    name: "SingleBook",
    meta: { title: "Buch" },
    component: BookDetailView
  },
  {
    path: "/favoriten",
    name: "Favorites",
    meta: { title: "Favoriten" },
    component: FavoritesView
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  const baseTitle = "Medienwerft Book App";
  document.title = to.name !== "Books" ? `${to.meta.title} | ${baseTitle}` : baseTitle;
});

export default router;
