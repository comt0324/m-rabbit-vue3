<template>
  <div class="detail" ref="detailRef">
    <!-- 0.顶部bar -->
    <nav-bar ref="navBarRef" @navBarItemClick="navBarItemClick" />
    <!-- 1.轮播图 -->
    <swiper
      name="swiperRef"
      :ref="getCpnsRef"
      :banners="banners"
      :isShowPadding="false"
      :loop="false"
      borderRadius="0"
      :indicatorType="1"
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
      :isAddToCart="isAddToCart"
      @closeSpecPopup="closeSpecPopup"
      @addToCart="addToCart"
    />
    <!-- 5.地址选择popup层 -->
    <address-popup
      :addressList="addressList"
      :isShowPopup="isShowAddressPopup"
      @closeAddressPopup="closeAddressPopup"
    />
    <!-- 6.商品列表/推荐、日销、周销 -->
    <recommend-list
      :list="detailGoodsList"
      name="recommendListRef"
      :ref="getCpnsRef"
    />
    <!-- 7.商品介绍/规格参数/问答 -->
    <tab-list
      :details="details"
      :questionList="questionList"
      name="tabListRef"
      :ref="getCpnsRef"
    />
  </div>
  <!-- 底部导航栏 -->
  <bottom-bar :goodCount="goodCount" @addToCart="showSpecPopup(1)" />
  <!-- 回到顶部 -->
  <back-top v-if="isReachDiyY" :curRef="detailRef" />
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useDetailStore } from "@/store"
import { storeToRefs } from "pinia"

import { useScroll } from "@/hooks/useScroll"

import Swiper from "@/components/swiper/swiper.vue"
import BackTop from "@/components/backtop/backtop.vue"
import NavBar from "./cpns/nav-bar.vue"
import BaseInfo from "./cpns/base-info.vue"
import Choice from "./cpns/choice.vue"
import SpecPopup from "./cpns/spec-popup.vue"
import AddressPopup from "./cpns/address-popup.vue"
import RecommendList from "./cpns/recommend-list.vue"
import TabList from "./cpns/tab-list.vue"
import BottomBar from "./cpns/bottom-bar.vue"

import questionList from "@/assets/data/detail-question"

// 实例
const detailRef = ref()
const cpnEls = {}
// 动态获取组件实例
const getCpnsRef = (e) => {
  if (!route.path.includes("/detail")) return
  const name = e.$el.getAttribute("name")
  cpnEls[name] = e.$el
}

// 获取当前商品id
const route = useRoute()
const { id } = route.params

// 监听当前id的改变了决定是否更新数据
watch(
  () => route.params.id,
  (id) => {
    if (!id) return
    getDetailPageData(id)
    reSetStatus()
    detailRef.value.scrollTo(0, 0)
  }
)

// 重置一些数据
const reSetStatus = () => {
  currentAddress.value = "空"
  choiceText.value = "空"
}

// 获取商品详情数据
const detailStore = useDetailStore()
const getDetailPageData = async (id) => {
  await detailStore.getGoodsDetail(id)
  await detailStore.getHotGoodByWeek(id)
  await detailStore.getCartCount()
}
getDetailPageData(id)
const { banners, goodInfos, addressList, details, detailGoodsList, goodCount } =
  storeToRefs(detailStore)

// sepc选择层
const isShowSpecPopup = ref(false)
const isAddToCart = ref(false)
const choiceText = ref("空")
const showSpecPopup = (status) => {
  if (status) isAddToCart.value = true
  isShowSpecPopup.value = true
}
const closeSpecPopup = (text) => {
  isAddToCart.value = false
  isShowSpecPopup.value = false
  if (text) choiceText.value = text
}

// address选择层
const currentAddress = ref("空")
const isShowAddressPopup = ref(false)
const showAddressPopup = () => {
  isShowAddressPopup.value = true
}
const closeAddressPopup = (address) => {
  isShowAddressPopup.value = false
  if (address) currentAddress.value = address
}

// 加入购物车
const addToCart = (id, count) => {
  detailStore.reqAddToCart(id, count)
}

/**
 * 滚动相关
 */
// 1.backTop相关
const { isReachDiyY, hadScrollTop } = useScroll(detailRef, 1000)
// 2.点击导航栏item滚动相应的位置
let isClick = false
let currentDistant = -1
const navBarItemClick = (index) => {
  const key = Object.keys(cpnEls)[index]
  currentDistant = cpnEls[key].offsetTop - 44
  detailRef.value.scrollTo({
    top: currentDistant,
    behavior: "smooth",
  })
  isClick = true
}
// 3.滚动到对应位置改变导航栏item的高亮状态
const navBarRef = ref()
watch(
  () => hadScrollTop.value,
  (newVal) => {
    if (newVal === currentDistant) isClick = false
    if (isClick) return
    const values = Object.values(cpnEls)
    // 默认为最后一个索引, 因为一会查找最后的会越界无法判断
    let index = values.length - 1
    for (let i = 0; i < values.length; i++) {
      if (values[i].offsetTop > newVal + 44) {
        index = i - 1
        break
      }
    }
    navBarRef.value.tabControlRef.setCurrentIndex(index)
  }
)
</script>

<style scoped lang="less">
.detail {
  padding-top: var(--section-bar-hegiht);
  height: calc(100vh - var(--section-bar-hegiht));
  overflow-y: auto;
  box-sizing: border-box;
  background-color: var(--gray-bg-color);
}
</style>
