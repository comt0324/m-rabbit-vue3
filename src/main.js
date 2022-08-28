import { createApp } from "vue"
import App from "./App.vue"
import pinia from "./store"
import router from "./router"

import "normalize.css"
import "@/assets/css/index.css"

import directives from "@/directives"

const app = createApp(App)

app.use(pinia).use(router).use(directives).mount("#app")
