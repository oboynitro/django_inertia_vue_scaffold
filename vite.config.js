import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	root: resolve("./static/src/js"),
	base: "/static/",
	plugins: [vue()],
	build: {
		outDir: resolve("./static/dist"),
		assetsDir: "",
		manifest: true,
		emptyOutDir: true,
		rollupOptions: {
			// Overwrite default .html entry to main.js in the static directory
			input: resolve("./static/src/js/main.js"),
		},
	},
});
