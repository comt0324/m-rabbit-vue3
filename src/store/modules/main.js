import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
  state: () => ({
    curTabBarIndex: 0,
  }),
  dispatch: {},
  persist: {
    key: "main",
    storage: sessionStorage,
    paths: ["curTabBarIndex"],
  },
})
