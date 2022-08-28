<template>
  <div class="new-goods">
    <section-bar
      leftText="新鲜好物"
      leftWidth="16vw"
      :showRightDefault="false"
    />
    <div class="goods-list">
      <template v-for="(item, index) in newGoods" :key="item.id">
        <goods-item :show-desc="false" class="item" :item="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import SectionBar from "@/components/section-bar/section-bar.vue"
import GoodsItem from "@/components/goods-item/goods-item.vue"
defineProps({
  newGoods: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped lang="less">
.new-goods {
  .goods-list {
    padding: 0 2.6667vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 48%;
    }
  }
}
</style>
