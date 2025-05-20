/// <reference types="vitest/config" />

import { crx } from "@crxjs/vite-plugin";

import { resolve } from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import manifest from "./src/manifest";
import tailwindcss from "@tailwindcss/vite";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

const isDev = process.env.__DEV__ === "true";

export default defineConfig({
  plugins: [solidPlugin(), crx({ manifest }), tailwindcss()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
    },
  },
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    rollupOptions: {
      input: {
        devtools: resolve(pagesDir, "devtools", "index.html"),
        devtools_panel: resolve(pagesDir, "devtools", "panel", "index.html"),
        content: resolve(pagesDir, "content", "index.ts"),
        background: resolve(pagesDir, "background", "index.ts"),
        popup: resolve(pagesDir, "popup", "index.html"),
        newtab: resolve(pagesDir, "newtab", "index.html"),
        options: resolve(pagesDir, "options", "index.html"),
      },
    },
  },
});
