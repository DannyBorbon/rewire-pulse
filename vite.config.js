import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    cssMinify: "esbuild",
  },

  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
