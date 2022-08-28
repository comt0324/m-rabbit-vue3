<template>
  <div ref="hRRef" class="hot-recommends">
    <section-bar
      leftText="热门推荐"
      leftWidth="16vw"
      :showRightDefault="false"
    />
    <div class="list">
      <template v-for="(item, index) in hotRecommends" :key="item.id">
        <div class="item">
          <img class="img" :src="item.picture" />
          <div class="infos">
            <div class="title">{{ item.title }}</div>
            <div class="alt">{{ item.alt }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import SectionBar from "@/components/section-bar/section-bar.vue"
defineProps({
  hotRecommends: {
    type: Array,
    default: () => [],
  },
})
const hRRef = ref()
defineExpose({ hRRef })
</script>

<style scoped lang="less">
.hot-recommends {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 2.6667vw;

    .item {
      width: 48%;
      margin-bottom: 2.6667vw;
      border-radius: 1.3333vw;

      .img {
        width: 100%;
        border-radius: 1.3333vw;
      }

      .infos {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 13.3333vw;

        .title {
          font-size: 4vw;
        }

        .alt {
          color: var(--gray-desc);
        }
      }
    }
  }
}
</style>
