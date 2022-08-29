import { defineStore } from "pinia"
import { getGoodsDetail } from "@/service/api/detail"

export const useDetailStore = defineStore("detail", {
  state: () => ({
    goodInfos: {}, //商品信息
    banners: [], //轮播图
  }),
  getters: {},
  actions: {
    async getGoodsDetail(id) {
      const res = await getGoodsDetail(id)
      if (res.code != "1") return
      this.goodInfos = res.result
      this.banners = res.result.mainPictures
      console.log(res)
    },
  },
})
