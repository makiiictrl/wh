import { resolve } from "path"

export default {
   root: resolve(__dirname, "src"),
   build: {
      outDir: "../dist",
      rollupOptions: {
         input: {
            main: resolve(__dirname, "src/index.html"),
            dashboard: resolve(__dirname, "src/dashboard.html"),
            errorPage: resolve(__dirname, "src/error-page.html"),
            loginPage: resolve(__dirname, "src/login-page.html"),
            // ...
            // List all files you want in your build
         }
      }
   },
   server: {
      port: 3000
   }
}
