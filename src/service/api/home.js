import lyRequest from "@/service"

export const getBanner = () => {
  return lyRequest.get("/home/banner")
}

export const getNewGoods = () => {
  return lyRequest.get("/home/new")
}

export const getHotRecommends = () => {
  return lyRequest.get("/home/hot")
}

export const getBrands = (limit = 10) => {
  return lyRequest.get("/home/brand", {
    params: {
      limit,
    },
  })
}

export const getSpecial = () => {
  return lyRequest.get("/home/special")
}

export const getGoods = () => {
  return lyRequest.get("/home/goods")
}
