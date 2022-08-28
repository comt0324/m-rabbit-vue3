import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export * from "./modules/main"
export * from "./modules/home"
export * from "./modules/user"
export * from "./modules/category"
export * from "./modules/detail"
export default pinia
