<template>
  <section-bar :showRightDefault="false" @centerSlotClick="centerSlotClick">
    <template #center>
      <van-search disabled shape="round" placeholder="请输入搜索关键词" />
    </template>
  </section-bar>
</template>

<script setup>
import { defineEmits } from "vue"
import SectionBar from "@/components/section-bar/section-bar.vue"
// 子传父
const emit = defineEmits(["centerSlotClick"])
const centerSlotClick = () => {
  emit("centerSlotClick", () => {
    console.log("点击中间的插槽，准备子传父")
  })
}
</script>

<style scoped></style>
