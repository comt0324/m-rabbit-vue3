<template>
  <div ref="homeRef" class="home scroll-view">
    <!-- 1.搜索框 -->
    <search-bar @centerSlotClick="searchBarClick" />
    <!-- 2.轮播图 -->
    <swiper :banners="banners" />
    <!-- 3.新鲜好物 -->
    <new-goods :new-goods="newGoods" />
    <!-- 4.热门推荐 -->
    <hot-recommends ref="hRRef" :hot-recommends="hotRecommends" />
    <!-- 5.热门品牌 -->
    <hot-brands :brand-list="brandList" />
    <!-- 6.最新专题 -->
    <new-special :special-list="specialList" />
    <!-- 7.商品展示 -->
    <section-bar
      leftText="商品展示"
      leftWidth="16vw"
      :showRightDefault="false"
    />
    <tab-control
      ref="tabControlRef"
      :tab-list="tabList"
      :fixed="isReachElsY['tabControlRef']"
      @tabClick="tabClick"
    />
    <goods-list
      :current-list="currentList"
      :goods-item-config="goodsItemConfig"
    />
    <!-- 8.回到顶部 -->
    <backtop v-if="isReachDiyY" :cur-ref="homeRef" />
  </div>
</template>

<script>
export default {
  name: "home",
}
</script>

<script setup>
import { ref, watch, onActivated, onMounted } from "vue"
import { useHomeStore } from "@/store"
import { storeToRefs } from "pinia"

import SearchBar from "@/views/home/cpns/search-bar.vue"
import Swiper from "@/views/home/cpns/swiper.vue"
import NewGoods from "@/views/home/cpns/new-goods.vue"
import HotRecommends from "@/views/home/cpns/hot-recommends.vue"
import HotBrands from "@/views/home/cpns/hot-brands.vue"
import NewSpecial from "@/views/home/cpns/new-special.vue"
import TabControl from "@/views/home/cpns/tab-control.vue"
import GoodsList from "@/components/goods-list/goods-list.vue"
import backtop from "@/components/backtop/backtop.vue"

import { useScroll } from "@/hooks/useScroll"

// goods-item的配置
const goodsItemConfig = {
  twoEllipsis: true,
  textAlign: "left",
  whiteBgColor: true,
}

// 进入搜索页面
const searchBarClick = () => {
  console.log("准备跳到搜索页")
}

// 更新商品数据
const tabClick = (index) => {
  currentList.value = goodsList.value[index]?.goods
}

// home的滚动
const homeRef = ref()
const tabControlRef = ref()
const hRRef = ref()
const { isReachDiyY, hadScrollTop, isReachElsY } = useScroll(homeRef, 1000, {
  tabControlRef,
  hRRef,
})
onActivated(() => {
  homeRef.value.scrollTo(0, hadScrollTop.value)
})

// 从store获取数据(轮播图/新鲜好物/热门推荐/商品列表)
const homeStore = useHomeStore()
const getHomeData = () => {
  homeStore.getBanner()
  homeStore.getNewGoods()
  homeStore.getHotRecommends()
  homeStore.getBrands()
  homeStore.getSpecial()
  homeStore.getGoods()
}
getHomeData()
const {
  banners,
  newGoods,
  hotRecommends,
  brandList,
  specialList,
  goodsList,
  currentList,
  tabList,
} = storeToRefs(homeStore)
</script>

<style scoped lang="less"></style>
