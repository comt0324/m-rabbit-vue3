import lyRequest from "@/service"

export const getCategory = () => {
  return lyRequest.get("/home/category/head", { showLoading: true })
}

export const getSubCategory = (id) => {
  return lyRequest.get("/category", {
    params: { id },
  })
}
