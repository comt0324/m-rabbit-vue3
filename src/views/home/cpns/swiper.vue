<template>
  <div class="swiper">
    <van-swipe
      :autoplay="3000"
      lazy-render
      indicator-color="var(--primary-color)"
    >
      <template v-for="(item, index) in banners" :key="item.id">
        <van-swipe-item>
          <img class="img" :src="item.imgUrl" />
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
defineProps({
  banners: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped lang="less">
.swiper {
  padding: 0 2.66667vw;

  .img {
    width: 100%;
    border-radius: 1.3333vw;
  }
}
</style>
