import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [react(), svgr()],
  optimizeDeps: {
    include: ["react-leaflet", "leaflet"],
    exclude: ["@react-leaflet/core"],
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
});
