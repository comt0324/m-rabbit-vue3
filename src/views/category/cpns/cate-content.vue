<template>
  <div class="cate-content">
    <div class="catelist">
      <template v-for="(item, index) in subcategoryList" :key="item.id">
        <div class="item" @click="subCateClick(item.id)">
          <img class="img" :src="item.picture" />
          <div class="name">{{ item.name }}</div>
        </div>
      </template>
    </div>
    <div class="goods-list">
      <subcategory-list :subcategory-list="subcategoryList" />
    </div>
  </div>
</template>

<script setup>
import SubcategoryList from "./subcategory-list.vue"

defineProps({
  subcategoryList: {
    type: Array,
    default: () => [],
  },
})

const subCateClick = (id) => {
  console.log("点击了二级分类", id)
}
</script>

<style scoped lang="less">
.cate-content {
  .catelist {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 33.3%;
      height: 18vw;
      margin: 2.6667vw 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img {
        width: 60%;
        height: 80%;
      }
      .name {
        margin-top: 1.3333vw;
        font-size: 3.2vw;
      }
    }
  }
}
</style>
