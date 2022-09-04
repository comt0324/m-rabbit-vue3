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
