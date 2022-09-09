<template>
  <div class="swiper" :style="{ padding: isShowPadding ? '0 2.6667vw' : '0' }">
    <van-swipe
      ref="swipeRef"
      touchable
      initial-swipe="0"
      :loop="loop"
      :autoplay="loop ? 3000 : 0"
      lazy-render
      indicator-color="var(--primary-color)"
    >
      <template v-for="(item, index) in banners" :key="item.id">
        <van-swipe-item>
          <goods-list-box v-if="item.goods" :list="item" itemWidth="28%" />
          <img
            v-else
            :style="{ borderRadius }"
            class="img"
            :src="item.imgUrl || item"
          />
        </van-swipe-item>
      </template>
      <!-- 指示器类型1-->
      <template v-if="indicatorType === 1" #indicator="{ active, total }">
        <div class="custom-indicator1">{{ active + 1 }}/{{ total }}</div>
      </template>
      <!-- 指示器类型2-->
      <template v-if="indicatorType === 2" #indicator="{ active, total }">
        <div class="custom-indicator2">
          <template v-for="item in banners.length" :key="item">
            <div class="item" :class="{ active: active + 1 === item }"></div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from "vue"
import GoodsListBox from "@/components/goods-list-box/goods-list-box.vue"

defineProps({
  // 轮播图数据
  banners: {
    type: Array,
    default: () => [],
  },
  // 是否展示padding
  isShowPadding: {
    type: Boolean,
    default: true,
  },
  // 是否循环播放
  loop: {
    type: Boolean,
    default: true,
  },
  // 是否圆角
  borderRadius: {
    type: String,
    default: "1.3333vw",
  },
  // 指示器的类型
  indicatorType: {
    type: Number,
    default: 0,
  },
})

const swipeRef = ref()
defineExpose({
  swipeRef,
})
</script>

<style scoped lang="less">
.custom-indicator1 {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.swiper {
  // padding: 0 2.66667vw;
  background-color: #fff;

  .img {
    width: 100%;
  }
}

.custom-indicator2 {
  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    width: 4.3333vw;
    height: 0.8vw;
    background-color: rgb(230, 215, 215);
  }

  .active {
    background-color: var(--primary-color) !important;
  }
}
</style>
