<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarList" :key="index">
      <div
        class="item"
        :class="{ active: curTabBarIndex === index }"
        @click="itemClick(index)"
      >
        <van-icon size="6.4vw" :name="item.icon" />
        <div class="text">{{ item.text }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useMainStore } from "@/store/index"
import { storeToRefs } from "pinia"
import tabbarList from "@/assets/data/tabbar"

// 切换item的处理
const mainStore = useMainStore()
const { curTabBarIndex } = storeToRefs(mainStore)
const router = useRouter()
const itemClick = (index) => {
  curTabBarIndex.value = index
  const path = tabbarList[index].path
  router.push(path)
}
</script>

<style scoped lang="less">
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  height: var(--tabbar-height);
  display: flex;
  padding: 0.8vw 0;
  box-sizing: border-box;
  border-top: 0.2667vw solid rgb(208, 206, 206);
  box-shadow: 0 -0.13vw rgb(233, 230, 230);

  .item {
    flex: 1;
    text-align: center;

    .text {
      margin-top: 0.8vw;
    }
  }

  .active {
    color: var(--primary-color);
  }
}
</style>
