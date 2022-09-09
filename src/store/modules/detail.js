import { defineStore } from "pinia"
import {
  getGoodsDetail,
  getHotGoodByWeek,
  reqCollect,
  deleteCollect,
  getCartCount,
  reqAddToCart,
} from "@/service/api/detail"
import { Toast } from "vant"

export const useDetailStore = defineStore("detail", {
  state: () => ({
    goodInfos: {}, //商品信息
    banners: [], //轮播图
    details: {}, //图片和属性
    addressList: [], //地址
    detailGoodsList: [], // 商品数据/推荐/日销/周销量
    goodCount: 0, // 购物车商品数量
  }),
  getters: {},
  actions: {
    // 请求商品详情数据
    async getGoodsDetail(id) {
      const res = await getGoodsDetail(id)
      if (res.code != "1") return
      this.goodInfos = res.result
      this.banners = res.result.mainPictures
      this.details = res.result.details
      this.addressList = res.result.userAddre333sses?.map((item, index) => ({
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

    // 请求周销量数据
    async getHotGoodByWeek(id) {
      const res = await getHotGoodByWeek(id)
      if (res.code != "1") return
      this.detailGoodsList.push({
        name: "周销量榜",
        goods: res.result,
      })
    },

    // 添加收藏
    async reqCollect(id) {
      const res = await reqCollect([id])
      if (res.code != "1") return
      // 重新渲染数据
      await this.getGoodsDetail(id)
      Toast.success("收藏成功")
    },

    // 取消收藏
    async deleteCollect(id) {
      console.log("取消收藏")
      const res = await deleteCollect([id])
      if (res.code != "1") return
      // 重新渲染数据
      await this.getGoodsDetail(id)
    },

    // 获取购物车数量
    async getCartCount() {
      const res = await getCartCount()
      if (res.code != "1") return
      this.goodCount = res.result.count
    },

    // 添加购物车
    async reqAddToCart(skuId, count) {
      const res = await reqAddToCart({ skuId, count })
      if (res.code != "1") return
      // 重新更新购物车数量
      await this.getCartCount()
      Toast.success("添加成功~")
    },
  },
})
