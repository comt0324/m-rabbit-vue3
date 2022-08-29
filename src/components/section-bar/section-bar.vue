<template>
  <div class="section-bar" :style="{ fontSize }">
    <div class="left" :style="{ width: leftWidth }" @click="leftSlotClick">
      <slot name="left">{{ leftText }}</slot>
    </div>
    <div
      class="center"
      :style="{ justifyContent: centerJustifyContent }"
      @click="centerSlotClick"
    >
      <slot name="center"></slot>
    </div>
    <div class="right" :style="{ width: rightWidth }" @click="rightSlotClick">
      <template v-if="showRightDefault">
        <slot name="right">
          <span>更多</span>
          <van-icon name="arrow" />
        </slot>
      </template>
      <template v-if="!showRightDefault">
        {{ rightText }}
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
defineProps({
  leftText: {
    type: String,
    default: "",
  },
  leftWidth: {
    type: String,
    default: "11.73333vw",
  },
  rightText: {
    type: String,
    default: "",
  },
  rightWidth: {
    type: String,
    default: "11.7333vw",
  },
  showRightDefault: {
    type: Boolean,
    default: true,
  },
  fontSize: {
    type: String,
    default: "3.7333vw",
  },
  centerJustifyContent: {
    type: String,
    default: "center",
  },
})
// 子传父
const emit = defineEmits(["leftSlotClick", "centerSlotClick", "rightSlotClick"])
const leftSlotClick = () => {
  emit("leftSlotClick")
}
const centerSlotClick = () => {
  emit("centerSlotClick")
}
const rightSlotClick = () => {
  emit("rightSlotClick")
}
</script>

<style scoped lang="less">
.section-bar {
  display: flex;
  height: var(--section-bar-hegiht);
  padding: 2vw 0;
  box-sizing: border-box;

  .left {
    margin-left: 2.6667vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 700;
  }

  .center {
    flex: 1;
    margin: 0 1.3333vw;
    display: flex;
    // justify-content: center;
    align-items: center;
  }

  .right {
    margin-right: 2.6667vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--gray-color);
  }
}
</style>
