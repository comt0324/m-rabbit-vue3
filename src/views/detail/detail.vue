<template>
  <div class="detail" ref="detailRef">
    <!-- 1.轮播图 -->
    <swiper
      :banners="banners"
      :isShowPadding="false"
      :loop="false"
      borderRadius="0"
    />
    <!-- 2.基本信息 -->
    <base-info :good-infos="goodInfos" />
    <!-- 3.选择区域 -->
    <choice
      :choiceText="choiceText"
      :choiceAddress="currentAddress"
      @selectSpecs="showSpecPopup"
      @selectAddress="showAddressPopup"
    />
    <!-- 4.规格选择popup层 -->
    <spec-popup
      :goodInfos="goodInfos"
      :isShowPopup="isShowSpecPopup"
      @closeSpecPopup="closeSpecPopup"
    />
    <!-- 5.地址选择popup层 -->
    <address-popup
      :addressList="addressList"
      :isShowPopup="isShowAddressPopup"
      @closeAddressPopup="closeAddressPopup"
    />
    <!-- 6.商品列表/推荐、日销、周销 -->
    <recomment-list :list="detailGoodsList" />
    <!-- 7.商品介绍/规格参数/问答 -->
    <tab-list :details="details" :questionList="questionList" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useDetailStore } from "@/store"
import { storeToRefs } from "pinia"

import Swiper from "@/components/swiper/swiper.vue"
import BaseInfo from "./cpns/base-info.vue"
import Choice from "./cpns/choice.vue"
import SpecPopup from "./cpns/spec-popup.vue"
import AddressPopup from "./cpns/address-popup.vue"
import RecommentList from "./cpns/recommend-list.vue"
import TabList from "./cpns/tab-list.vue"

import questionList from "@/assets/data/detail-question"

// 获取当前商品id
const route = useRoute()
const { id } = route.params

// 监听当前id的改变了决定是否更新数据
const detailRef = ref()
watch(
  () => route.params.id,
  (newId) => {
    getDetailPageData(newId)
    reSetStatus()
    detailRef.value.scrollTo(0, 0)
  }
)

// 重置一些数据
const reSetStatus = () => {
  currentAddress.value = "未选"
  choiceText.value = "空"
}

// 获取商品详情数据
const detailStore = useDetailStore()
const getDetailPageData = async (id) => {
  await detailStore.getGoodsDetail(id)
  await detailStore.getHotGoodByWeek(id)
}
getDetailPageData(id)
const { banners, goodInfos, addressList, details, detailGoodsList } =
  storeToRefs(detailStore)

// sepc选择层
const isShowSpecPopup = ref(false)
const choiceText = ref("空")
const showSpecPopup = () => {
  isShowSpecPopup.value = true
}
const closeSpecPopup = (text) => {
  isShowSpecPopup.value = false
  if (text) choiceText.value = text
}

// address选择层
const currentAddress = ref("未选")
const isShowAddressPopup = ref(false)
const showAddressPopup = () => {
  isShowAddressPopup.value = true
}
const closeAddressPopup = (address) => {
  isShowAddressPopup.value = false
  if (address) currentAddress.value = address
}
</script>

<style scoped lang="less">
.detail {
  height: calc(100vh - 11.7333vw);
  overflow-y: auto;
  background-color: var(--gray-bg-color);
}
</style>
