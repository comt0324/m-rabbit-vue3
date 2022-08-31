<template>
  <div class="swiper" :style="{ padding: isShowPadding ? '0 2.6667vw' : '0' }">
    <van-swipe
      touchable
      :loop="loop"
      :autoplay="loop ? 3000 : 0"
      lazy-render
      indicator-color="var(--primary-color)"
    >
      <template v-for="(item, index) in banners" :key="item.id">
        <van-swipe-item>
          <img
            :style="{ borderRadius }"
            class="img"
            :src="item.imgUrl || item"
          />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
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
  isShowPadding: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  borderRadius: {
    type: String,
    default: "1.3333vw",
  },
})
</script>

<style scoped lang="less">
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.swiper {
  // padding: 0 2.66667vw;

  .img {
    width: 100%;
  }
}
</style>
