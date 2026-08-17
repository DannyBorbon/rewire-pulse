import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["313b-2806-101e-3-76b-54b3-9474-e88c-79e0.ngrok-free.app"],
  },
});
