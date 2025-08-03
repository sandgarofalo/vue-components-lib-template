import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) =>
  mode === "development"
    ? {
        plugins: [
          vue({
            template: { transformAssetUrls },
          }),
        ],
        root: path.resolve(__dirname, "playground"),
        server: {
          open: true,
        },
      }
    : {
        plugins: [vue()],
        build: {
          lib: {
            entry: "./src/entry.ts",
            name: "VueComponentsLibTemplate",
            fileName: (format) => `vue-components-lib-template.${format}.js`,
          },
          rollupOptions: {
            external: ["vue"],
            output: {
              globals: {
                vue: "Vue",
              },
            },
          },
        },
      }
);
