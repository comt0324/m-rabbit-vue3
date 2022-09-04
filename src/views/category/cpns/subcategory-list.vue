<template>
  <div class="subcategory-ist">
    <template v-for="(item, index) in subcategoryList" :key="item.id">
      <template class="item" v-if="item.goods.length">
        <goods-list-box :list="item" @rightSlotClick="rightSlotClick" />
      </template>
    </template>
  </div>
</template>

<script setup>
import GoodsListBox from "@/components/goods-list-box/goods-list-box.vue"
defineProps({
  subcategoryList: {
    type: Array,
    default: () => [],
  },
})

const rightSlotClick = (id) => {
  console.log("右边插槽的点击", id)
}
</script>

<style scoped lang="less"></style>
