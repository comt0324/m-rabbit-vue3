import lyRequest from "@/service"

export const getGoodsDetail = (id) => {
  return lyRequest.get("/goods", {
    params: { id: Number(id) },
  })
}
