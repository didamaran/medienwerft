import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".ts", ".vue"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
