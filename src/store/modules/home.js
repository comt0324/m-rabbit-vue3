import { defineStore } from "pinia"
import {
  getBanner,
  getNewGoods,
  getHotRecommends,
  getBrands,
  getSpecial,
  getGoods,
} from "@/service/api/home"

export const useHomeStore = defineStore("home", {
  state: () => ({
    banners: [],
    newGoods: [],
    hotRecommends: [],
    brandList: [],
    specialList: [],
    goodsList: [],
    currentList: [],
    tabList: [],
  }),
  actions: {
    async getBanner() {
      const res = await getBanner()
      if (res.code != "1") return
      this.banners = res.result
    },

    async getNewGoods() {
      const res = await getNewGoods()
      if (res.code != "1") return
      this.newGoods = res.result
      console.log(res)
    },

    async getHotRecommends() {
      const res = await getHotRecommends()
      if (res.code != "1") return
      this.hotRecommends = res.result
    },

    async getBrands(limit) {
      const res = await getBrands(limit)
      if (res.code != "1") return
      this.brandList = res.result
    },

    async getSpecial() {
      const res = await getSpecial()
      if (res.code != "1") return
      this.specialList = res.result
    },

    async getGoods() {
      const res = await getGoods()
      if (res.code != "1") return
      this.goodsList = res.result
      this.currentList = res.result[0].goods
      this.tabList = res.result.map((item) => item.name)
    },
  },
})
