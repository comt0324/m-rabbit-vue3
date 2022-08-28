<template>
  <div class="hot-brand">
    <section-bar
      leftText="热门品牌"
      leftWidth="16vw"
      :showRightDefault="false"
    />
    <div class="brand-list">
      <template v-for="(item, index) in brandList" :key="item.id">
        <img class="img" :src="item.picture" />
      </template>
    </div>
  </div>
</template>

<script setup>
import SectionBar from "@/components/section-bar/section-bar.vue"
defineProps({
  brandList: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped lang="less">
.brand-list {
  white-space: nowrap;
  overflow-x: auto;
  padding-bottom: 2.6667vw;

  .img {
    width: 40%;
    border-radius: 1.3333vw;
    margin-left: 1.333vw;
  }
  .img:first-of-type {
    margin-left: 2.6667vw;
  }
  .img:last-of-type {
    margin-right: 1.6667vw;
  }
}
</style>
