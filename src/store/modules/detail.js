import { defineStore } from "pinia"
import { getGoodsDetail, getHotGoodByWeek } from "@/service/api/detail"

export const useDetailStore = defineStore("detail", {
  state: () => ({
    goodInfos: {}, //商品信息
    banners: [], //轮播图
    details: {}, //图片和属性
    addressList: [], //地址
    detailGoodsList: [], // 商品数据/推荐/日销/周销量
  }),
  getters: {},
  actions: {
    async getGoodsDetail(id) {
      const res = await getGoodsDetail(id)
      if (res.code != "1") return
      this.goodInfos = res.result
      this.banners = res.result.mainPictures
      this.details = res.result.details
      this.addressList = res.result.userAddresses.map((item, index) => ({
        id: index,
        name: item.receiver,
        tel: item.contact,
        address: item.fullLocation + item.address,
        isDefault: !item.isDefault,
      }))
      // 商品列表数据
      const similarProducts = {
        name: "相似推荐",
        goods: res.result.similarProducts,
      }
      const hotByDay = {
        name: "日销量榜",
        goods: res.result.hotByDay,
      }
      this.detailGoodsList = []
      this.detailGoodsList.push(similarProducts, hotByDay)
      console.log(res)
    },

    async getHotGoodByWeek(id) {
      const res = await getHotGoodByWeek(id)
      if (res.code != "1") return
      this.detailGoodsList.push({
        name: "周销量榜",
        goods: res.result,
      })
    },
  },
})
