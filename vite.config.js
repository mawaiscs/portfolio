import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Matches a package folder inside node_modules on both / and \ paths.
const pkg = (names) => new RegExp(`node_modules[\\\\/](${names.join("|")})[\\\\/]`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        // Long-lived vendor chunks cache well between deploys.
        codeSplitting: {
          groups: [
            { name: "react", test: pkg(["react", "react-dom", "react-router", "react-router-dom", "scheduler"]) },
            { name: "motion", test: pkg(["framer-motion", "motion-dom", "motion-utils"]) },
            { name: "icons", test: pkg(["react-icons"]) },
          ],
        },
      },
    },
  },
});
