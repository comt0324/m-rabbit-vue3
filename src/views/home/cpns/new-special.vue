<template>
  <div class="new-special">
    <section-bar leftText="最新专题" leftWidth="16vw" />
    <div class="list">
      <template v-for="(item, index) in specialList" :key="index">
        <div class="item">
          <img class="img" :src="item.detailsUrl" />
          <div class="infos">
            <div class="left">
              <div class="title one-ellipsis">{{ item.title }}</div>
              <div class="summary one-ellipsis">{{ item.summary }}</div>
            </div>
            <div class="right">
              <div class="price" v-price="item.lowestPrice">起</div>
            </div>
          </div>
          <div class="other">
            <div class="left">
              <div class="collect">
                <van-icon name="like-o" />
                <span>{{ item.collectNum }}</span>
              </div>
              <div class="view">
                <van-icon name="browsing-history-o" />
                <span>{{ item.viewNum }}</span>
              </div>
            </div>
            <div class="right">
              <div class="reply">
                <van-icon name="chat-o" />
                <span>{{ item.replyNum }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  specialList: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped lang="less">
.new-special {
  .list {
    padding: 0 2.6667vw;

    .item {
      margin: 0 auto;
      width: 80%;
      position: relative;
      margin-bottom: 5.3333vw;

      .img {
        width: 100%;
        border-radius: 1.3333vw;
      }

      .infos {
        position: absolute;
        bottom: 10.3333vw;
        display: flex;
        padding: 0 2.3333vw;

        .left {
          box-sizing: border-box;
          width: 50vw;
          margin-right: 2.6667vw;

          .title {
            color: #fff;
          }

          .summary {
            color: var(--gray-desc);
            margin-top: 1.3333vw;
          }
        }

        .right {
          flex: 1;
          display: flex;
          align-items: center;

          .price {
            padding: 1vw 2vw;
            border-radius: 0.8vw;
            font-size: 3.4667vw;
            background-color: #fff;
            color: var(--price-color);
          }
        }
      }

      .other {
        display: flex;
        justify-content: space-between;
        padding: 2.6667vw 2.6667vw;
        background-color: #f0f9f4;

        span {
          margin-left: 1vw;
        }

        .left {
          display: flex;

          .collect {
            margin-right: 2.6667vw;
          }
        }
      }
    }
  }
}
</style>
