import { defineStore } from "pinia"
import { getGoodsDetail } from "@/service/api/detail"

export const useDetailStore = defineStore("detail", {
  state: () => ({
    goodInfos: {}, //商品信息
    banners: [], //轮播图
    details: {}, //图片和属性
    addressList: [], //地址
    // specs: [], //商品规格
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
      // this.specs = res.result.specs
      console.log(res)
    },
  },
})
