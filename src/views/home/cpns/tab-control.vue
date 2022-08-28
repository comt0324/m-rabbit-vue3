<template>
  <div ref="tabControlRef" class="tab-control" :class="{ fixed }">
    <div class="list">
      <template v-for="(item, index) in tabList" :key="index">
        <div class="item-wrap">
          <div
            class="item"
            :class="{ active: currentIndex === index }"
            @click="tabClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  tabList: {
    type: Array,
    default: () => [],
  },
  fixed: {
    type: Boolean,
    default: false,
  },
})

const currentIndex = ref(0)
const emit = defineEmits(["tabClick"])
const tabClick = (index) => {
  currentIndex.value = index
  emit("tabClick", index)
}

const tabControlRef = ref()
defineExpose({ tabControlRef })
</script>

<style scoped lang="less">
.fixed {
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
}
.tab-control {
  padding: 2.6667vw 0;
  .list {
    padding: 0 2.6667vw;
    height: 5vw;
    display: flex;

    .item-wrap {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .item {
        width: 60%;
        text-align: center;
        height: 100%;
      }
    }

    .active {
      font-weight: 700;
      border-bottom: 0.5333vw solid var(--primary-color);
      color: var(--primary-color);
    }
  }
}
</style>
