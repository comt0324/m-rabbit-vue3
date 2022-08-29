<template>
  <div class="detail">
    <!-- 1.轮播图 -->
    <swiper :banners="banners" :isShowPadding="false" :loop="false" />
    <!-- 2.基本信息 -->
    <base-info :good-infos="goodInfos" />
    <!-- 3.选择区域 -->
    <choice />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { useDetailStore } from "@/store"
import { storeToRefs } from "pinia"

import Swiper from "@/components/swiper/swiper.vue"
import BaseInfo from "./cpns/base-info.vue"
import Choice from "./cpns/choice.vue"

// 获取当前商品id
const route = useRoute()
const { id } = route.params

// 获取商品详情数据
const detailStore = useDetailStore()
detailStore.getGoodsDetail(id)
const { banners, goodInfos } = storeToRefs(detailStore)
</script>

<style scoped lang="less">
.detail {
  height: calc(100vh - 11.7333vw);
  overflow-y: auto;
  background-color: var(--gray-bg-color);
}
</style>
