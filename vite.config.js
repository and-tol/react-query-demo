import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import WindiCSS from 'vite-plugin-windicss';
// import vitePluginCssModules from "vite-plugin-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS(),
    // vitePluginCssModules()
  ],
  // css: {
  //   modules: {
  //     localsConvention: ['camelCase', 'dashes'],
  //     generateScopedName: "[name]_[local]__[hash:base64:2]",
  //   }
  // }
});
