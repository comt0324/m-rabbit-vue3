<template>
  <div class="category">
    <div class="left scroll-view">
      <sidebar
        :category-list="categoryList"
        :sub-category-list="subCategoryList"
        @itemClick="sidebarItemClick"
      />
    </div>
    <div class="right scroll-view">
      <cate-content :subcategory-list="subCategoryList" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useCategoryStore } from "@/store"
import sidebar from "./cpns/sidebar.vue"
import CateContent from "./cpns/cate-content.vue"

const categoryStore = useCategoryStore()

// 获取数据
categoryStore.getCategory()
const { categoryList, subCategoryList } = storeToRefs(categoryStore)

// 切换侧边栏sidebar的item
const sidebarItemClick = (id) => {
  categoryStore.getSubCategory(id)
}
</script>

<style scoped lang="less">
.category {
  display: flex;

  .left {
    background-color: var(--gray-bg-color);
  }

  .right {
    width: calc(100vw - var(--van-sidebar-width));
  }
}
</style>
