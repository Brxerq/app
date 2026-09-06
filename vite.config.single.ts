import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

// Builds the whole app into one self-contained dist/index.html (JS + CSS inlined).
// Images stay as separate files so the HTML does not balloon past a few hundred KB.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
