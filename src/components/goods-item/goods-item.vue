<template>
  <div
    :style="{
      textAlign,
      background: whiteBgColor ? '#fff' : '#F0F9F4',
    }"
    class="goods-item"
    @click="itemClick(item)"
  >
    <img class="img" v-lazy="item.picture" />
    <div class="infos">
      <div
        class="name"
        :class="[twoEllipsis ? 'two-ellipsis' : 'one-ellipsis']"
        :style="{ fontSize: titleFontSize }"
      >
        {{ item.name }}
      </div>
      <div
        v-if="showDesc"
        class="desc one-ellipsis"
        :style="{ fontSize: descFontSize }"
      >
        {{ item.desc }}
      </div>
      <div v-price="item.price" class="price"></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  twoEllipsis: {
    type: Boolean,
    default: false,
  },
  showDesc: {
    type: Boolean,
    default: true,
  },
  textAlign: {
    type: String,
    default: "center",
  },
  whiteBgColor: {
    type: Boolean,
    default: false,
  },
  titleFontSize: {
    type: String,
    default: "4vw",
  },
  descFontSize: {
    type: String,
    default: "3.7333vw",
  },
})

// const emit = defineEmits(["goodsItemClick"])
const router = useRouter()
const itemClick = (item) => {
  router.push("/detail/ " + item.id)
  console.log("点击了商品, 准备跳到详情页", item.id)
  // emit("goodsItemClick", item.id)
}
</script>

<style scoped lang="less">
.goods-item {
  width: 100%;
  margin-bottom: 2.6667vw;
  border-radius: 1.3333vw;

  .img {
    width: 100%;
    border-radius: 1.3333vw 1.3333vw 0 0;
  }

  .infos {
    line-height: 1.6;
    padding: 0 1.3333vw;

    .name {
      font-size: 4vw;
      padding-top: 1.3333vw;
    }

    .desc {
      color: var(--gray-desc);
    }

    .price {
      font-size: 4.2667vw;
      color: var(--price-color);
    }
  }
}
</style>
