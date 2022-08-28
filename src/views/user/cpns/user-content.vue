<template>
  <div class="content">
    <section-bar leftText="我的" />
    <div class="list">
      <template v-for="(item, index) in list" :key="index">
        <div class="item">
          <van-icon size="6.4vw" :name="item.icon" />
          <div class="text">{{ item.text }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import SectionBar from "@/components/section-bar/section-bar.vue"
import list from "@/assets/data/user-content"
</script>

<style scoped lang="less">
.content {
  margin-top: 5.3333vw;
  background-color: #fff;
  border-radius: 1.3333vw;

  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3.6667vw;

      .text {
        margin-top: 1.333vw;
      }
    }
  }
}
</style>
