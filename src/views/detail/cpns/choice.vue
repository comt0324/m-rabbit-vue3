<template>
  <div class="choice">
    <!-- 选择 -->
    <div class="header">
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
        <template #center> {{ choiceAddress }}</template>
        <template #right> <van-icon name="ellipsis" /> </template>
      </section-bar>

      <section-bar
        v-bind="commonConfig"
        leftText="运费"
        :showRightDefault="false"
      >
        <template #center> 在线支付免运费</template>
      </section-bar>
    </div>
    <!-- 服务 -->
    <div class="footer">
      <div class="item">
        <van-icon size="3.4667vw" color="var(--primary-color)" name="checked" />
        <span>免费上门取退</span>
      </div>
      <div class="item">
        <van-icon size="3.4667vw" color="var(--primary-color)" name="checked" />
        <span>送运费险</span>
      </div>
      <div class="item">
        <van-icon size="3.4667vw" color="var(--primary-color)" name="checked" />
        <span>可配送港澳台及国外</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionBar from "@/components/section-bar/section-bar.vue"

defineProps({
  choiceText: {
    type: String,
    default: "空",
  },
  choiceAddress: {
    type: String,
    default: "未选",
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

<style scoped lang="less">
.choice {
  margin-bottom: 2.6667vw;

  .header {
    margin-bottom: 0;
    border-radius: 0;
    background-color: #fff;
    padding: 0 2.1333vw;
  }

  .footer {
    background-color: #fafafa;
    padding: 2vw 4.8vw;
    border-radius: 0 0 4vw 4vw;
    display: flex;
    justify-content: space-between;

    .item {
      span {
        font-size: 3.2vw;
        margin-left: 0.8vw;
        color: #8c8c8c;
      }
    }
  }
}
</style>
