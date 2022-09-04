import { defineStore } from "pinia"
import { getCategory, getSubCategory } from "@/service/api/category"

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categoryList: [],
    subCategoryList: [],
  }),
  actions: {
    async getCategory() {
      // 获取一级分类
      const res = await getCategory()
      if (res.code != "1") return
      this.categoryList = res.result.map((item) => ({
        name: item.name,
        id: item.id,
      }))
      // 获取二级分类数据
      const categoryId = this.categoryList[0].id
      this.getSubCategory(categoryId)
    },
    async getSubCategory(id) {
      const res = await getSubCategory(id)
      this.subCategoryList = res.result.children
      console.log(res)
    },
  },
})
