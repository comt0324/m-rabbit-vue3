<template>
  <div class="base-info detail-item">
    <div class="header">
      <div class="left">
        <div class="price" v-price="goodInfos.price"></div>
        <div class="oldprice" v-price="goodInfos.price"></div>
      </div>
      <div class="right">
        <div class="price-desc">
          <van-icon size="4.8vw" name="after-sale" />
          <div class="text">降价提醒</div>
        </div>
        <div class="like" @click="handleCollectClick">
          <van-icon
            size="4.8vw"
            :color="isCollected ? '#ff5000' : ''"
            :name="isCollected ? 'like' : 'like-o'"
          />
          <div class="text" :style="{ color: isCollected ? '#ff5000' : '' }">
            {{ isCollected ? "已收藏" : "收藏" }}
          </div>
        </div>
      </div>
    </div>
    <div class="name">{{ goodInfos.name }}</div>
    <div class="desc">{{ goodInfos.desc }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useDetailStore } from "@/store"

const props = defineProps({
  goodInfos: {
    type: Object,
    default: () => ({}),
  },
})

const isCollected = computed(() => {
  return props.goodInfos.isCollect
})

// 收藏商品
const detailStore = useDetailStore()
const handleCollectClick = () => {
  if (props.goodInfos.isCollect) {
    detailStore.deleteCollect(props.goodInfos.id)
  } else {
    detailStore.reqCollect(props.goodInfos.id)
  }
}
</script>

<style scoped lang="less">
.base-info {
  border-radius: 0 0 4vw 4vw;

  .header {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      .price {
        color: var(--price-color);
        font-weight: 700;
        font-size: 6vw;
        margin-right: 2.6667vw;
      }
      .oldprice {
        text-decoration: line-through;
        line-height: 2;
      }
    }

    .right {
      display: flex;
      text-align: center;
      font-size: 3.2vw;
      .price-desc {
        margin-right: 2.6667vw;
      }
    }
  }

  .name {
    margin-top: 1.3333vw;
    font-size: 4.2667vw;
    font-weight: 700;
  }

  .desc {
    font-size: 3.2vw;
    padding: 4.8vw 0 0;
  }
}
</style>
