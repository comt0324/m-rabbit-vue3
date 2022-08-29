<template>
  <div class="choice detail-item">
    <section-bar
      v-bind="commonConfig"
      leftText="已选"
      @rightSlotClick="selectSpecs"
    >
      <template #center> 我是我是</template>
      <template #right> <van-icon name="ellipsis" /> </template>
    </section-bar>
    <section-bar
      v-bind="commonConfig"
      leftText="送至"
      @rightSlotClick="selectAddress"
    >
      <template #right> <van-icon name="ellipsis" /> </template>
    </section-bar>
    <section-bar
      v-bind="commonConfig"
      leftText="运费"
      :showRightDefault="false"
    >
      <template #center> 在线支付免运费</template></section-bar
    >
  </div>
</template>

<script setup>
import SectionBar from "@/components/section-bar/section-bar.vue"

const commonConfig = {
  fontSize: "3.4667vw",
  centerJustifyContent: "flexStart",
}

const selectSpecs = () => {
  console.log("选择规格")
}

const selectAddress = () => {
  console.log("选择地址")
}
</script>

<style scoped lang="less"></style>
