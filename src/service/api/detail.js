import lyRequest from "@/service"

export const getGoodsDetail = (id) => {
  return lyRequest.get("/goods", {
    params: { id: Number(id) },
  })
}

export const getHotGoodByWeek = (id, limit = 4, type = 1) => {
  return lyRequest.get("/goods/hot", {
    params: {
      id,
      limit,
      type,
    },
  })
}

// 添加收藏
// collectType，1为商品，2为专题，3为品牌  int
// collectObjectIds: 收藏集合ids   string []
export const reqCollect = (collectObjectIds, collectType = 1) => {
  return lyRequest.post("/member/collect", {
    data: {
      collectType,
      collectObjectIds,
    },
  })
}

// 取消收藏
// 参数同上
export const deleteCollect = (ids, type = 1) => {
  return lyRequest.request("/member/collect/batch", {
    method: "DELETE",
    data: {
      ids,
      type,
    },
  })
}

// 获取购物车数量
export const getCartCount = () => {
  return lyRequest.get("/member/cart/count")
}

// 添加购物车
export const reqAddToCart = ({ skuId, count }) => {
  return lyRequest.post("/member/cart", {
    data: {
      skuId,
      count,
    },
  })
}
