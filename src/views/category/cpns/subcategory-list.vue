<template>
  <div class="subcategory-ist">
    <template v-for="(item, index) in subcategoryList" :key="item.id">
      <div class="item" v-if="item.goods.length">
        <section-bar
          :leftText="item.name"
          leftWidth="26.6667vw"
          @rightSlotClick="rightSlotClick(item.id)"
        />
        <goods-list
          :goods-item-config="goodsItemConfig"
          :currentList="item.goods"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import GoodsList from "@/components/goods-list/goods-list.vue"
import SectionBar from "@/components/section-bar/section-bar.vue"
defineProps({
  subcategoryList: {
    type: Array,
    default: () => [],
  },
})
// item的配置
const goodsItemConfig = {
  showDesc: false,
  whiteBgColor: true,
  titleFontSize: "3.4667vw",
}

const rightSlotClick = (id) => {
  console.log("右边插槽的点击", id)
}
</script>

<style scoped lang="less"></style>
