import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: { "process.env.RAPID_API_KEY": JSON.stringify(env.RAPID_API_KEY) },
    plugins: [react(), eslint()],
    base:"/youtube-clone"
  };
});
