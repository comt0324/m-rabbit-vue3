<template>
  <div class="choice detail-item">
    <section-bar
      v-bind="commonConfig"
      leftText="已选"
      @rightSlotClick="selectSpecs"
    >
      <template #center> {{ choiceText }}</template>
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

defineProps({
  choiceText: {
    type: String,
    default: "空",
  },
})

const commonConfig = {
  fontSize: "3.4667vw",
  centerJustifyContent: "flexStart",
}

const emit = defineEmits(["selectSpecs", "selectAddress"])
const selectSpecs = () => {
  emit("selectSpecs")
}

const selectAddress = () => {
  emit("selectAddress")
}
</script>

<style scoped lang="less"></style>
