// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/o.blass/PhpstormProjects/mintosCurrencySelect/mintosCurrencySelect/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/o.blass/PhpstormProjects/mintosCurrencySelect/mintosCurrencySelect/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/o.blass/PhpstormProjects/mintosCurrencySelect/mintosCurrencySelect/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/o.blass/PhpstormProjects/mintosCurrencySelect/mintosCurrencySelect/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ["organisms-currency-list"].includes(tag)
          }
        }
      }
    ),
    vueJsx()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    port: 8e3,
    host: "0.0.0.0",
    strictPort: true,
    watch: {
      usePolling: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvby5ibGFzcy9QaHBzdG9ybVByb2plY3RzL21pbnRvc0N1cnJlbmN5U2VsZWN0L21pbnRvc0N1cnJlbmN5U2VsZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvby5ibGFzcy9QaHBzdG9ybVByb2plY3RzL21pbnRvc0N1cnJlbmN5U2VsZWN0L21pbnRvc0N1cnJlbmN5U2VsZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9vLmJsYXNzL1BocHN0b3JtUHJvamVjdHMvbWludG9zQ3VycmVuY3lTZWxlY3QvbWludG9zQ3VycmVuY3lTZWxlY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZShcbiAgICAgIHtcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4gWydvcmdhbmlzbXMtY3VycmVuY3ktbGlzdCddLmluY2x1ZGVzKHRhZyksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKSxcbiAgICB2dWVKc3goKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODAwMCxcbiAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICB3YXRjaDoge1xuICAgICAgdXNlUG9sbGluZzogdHJ1ZVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlksU0FBUyxlQUFlLFdBQVc7QUFFaGIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUp1TyxJQUFNLDJDQUEyQztBQU8zUyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0U7QUFBQSxRQUNFLFVBQVU7QUFBQSxVQUNSLGlCQUFpQjtBQUFBLFlBQ2YsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHlCQUF5QixFQUFFLFNBQVMsR0FBRztBQUFBLFVBQ3BFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
