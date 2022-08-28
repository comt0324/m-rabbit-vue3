<template>
  <div class="goods-list">
    <template v-for="(item, index) in currentList" :key="item.id">
      <goods-item class="item" v-bind="goodsItemConfig" :item="item" />
    </template>
  </div>
</template>

<script setup>
import GoodsItem from "@/components/goods-item/goods-item.vue"

defineProps({
  currentList: {
    type: Array,
    default: () => [],
  },
  goodsItemConfig: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped lang="less">
.goods-list {
  padding: 0 2.6667vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
  }
}
</style>
