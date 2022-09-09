<template>
  <div class="spec-popup">
    <van-popup
      v-model:show="isShowPopup"
      closeable
      :close-on-click-overlay="false"
      round
      close-icon="close"
      position="bottom"
      @click-close-icon="closeSpecPopup"
      :style="{ height: '80%' }"
    >
      <!-- 头部 -->
      <div class="header">
        <img
          class="img"
          :src="itemRefsList[0].tag.picture || goodInfos.mainPictures[0]"
        />
        <div class="info">
          <div class="price" v-price="goodInfos.price"></div>
          <div class="desc">商品描述</div>
          <div ref="hasChoiceRef" class="text">
            <span style="white-space: prelpre-line">已选 </span>
            <template v-for="(item, index) in itemRefsList" :key="item">
              <span>{{ item.tag.name }}，</span>
            </template>
            <span>{{ goodCount }}个</span>
          </div>
        </div>
      </div>
      <!-- 规格 -->
      <template v-for="(item, index) in goodInfos.specs" :key="item.id">
        <div class="content-item">
          <section-bar
            :leftText="item.name"
            :showRightDefault="false"
            fontSize="3.4667vw"
          />
          <div class="tagList">
            <template v-for="(tag, iindex) in item.values" :key="tag">
              <div
                class="tag one-ellipsis"
                :class="{
                  active: itemRefsList[index].currentIndex.value == iindex,
                }"
                @click="tagClick(index, iindex, tag)"
              >
                {{ tag.name }}
              </div>
            </template>
          </div>
        </div>
      </template>
      <!-- 数量 -->
      <section-bar
        leftText="数量"
        fontSize="3.4667vw"
        rightWidth="21.3333vw"
        class="count-bar"
      >
        <template #right>
          <van-stepper v-model="goodCount" disable-input button-size="4.8vw" />
        </template>
      </section-bar>
      <!-- 按钮 -->
      <div class="btn">
        <van-button
          type="primary"
          color="var(--primary-color)"
          round
          block
          @click="addToCart"
          >确认</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import SectionBar from "@/components/section-bar/section-bar.vue"

const props = defineProps({
  goodInfos: {
    type: Object,
    default: () => ({}),
  },
  isShowPopup: {
    type: Boolean,
    default: false,
  },
  isAddToCart: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["closeSpecPopup", "addToCart"])

const hasChoiceRef = ref()

// 获取返回文字
const getChoiceText = () => {
  const preText = hasChoiceRef.value.textContent
  const newText = preText.substr(3)
  return newText
}

// 关闭Popup层
const closeSpecPopup = () => {
  // const text = getChoiceText()
  emit("closeSpecPopup")
}

// 商品个数
const goodCount = ref(1)

// 规格功能
let itemRefsList = []
watch(
  () => props.goodInfos,
  (newGoodInfos) => {
    // 先清除原来的数据
    itemRefsList.splice(0)
    // 更新新的数据
    newGoodInfos.specs.forEach((item, index) => {
      // 1.初始化默认值
      const currentIndex = ref(0)
      const tag = item.values[0]
      // 2.动态添加每一个规格的数据进数组
      itemRefsList.push({ currentIndex, tag })
    })
  }
)

// 点击标签
const tagClick = (index, iindex, tag) => {
  itemRefsList[index].tag = tag
  itemRefsList[index].currentIndex.value = iindex
}

// 加入购物车
const addToCart = () => {
  // const newText = preText.slice(3)
  const text = getChoiceText()
  emit("closeSpecPopup", text)

  // 确定要加入购物车
  if (props.isAddToCart) {
    const currentSku = props.goodInfos.skus.find((sku) =>
      itemRefsList.every((item) =>
        sku.specs.some((spec) => spec.valueName === item.tag.name)
      )
    )
    emit("addToCart", currentSku.id, goodCount.value)
  }
}
</script>

<style scoped lang="less">
.header {
  padding: 4.8vw;
  display: flex;

  .img {
    width: 26.6667vw;
    height: 26.6667vw;
    border-radius: 1.3333vw;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 2.6667vw;

    .price {
      font-weight: 700;
      font-size: 4vw;
      color: var(--price-color);
    }

    .desc {
      margin-top: 2.6667vw;
      font-size: 3.2vw;
      color: var(--gray-desc);
    }

    .text {
      margin-top: 2.6667vw;
      font-size: 3.2vw;
      color: var(--gray-desc);
    }
  }
}
.content-item {
  padding: 0 2.1333vw;

  .tagList {
    display: flex;
    flex-wrap: wrap;

    .tag {
      box-sizing: border-box;
      margin-left: 2.6667vw;
      font-size: 3.2vw;
      height: 7.4vw;
      line-height: 7.4vw;
      min-width: 20px;
      background-color: #f2f2f2;
      margin-bottom: 2.6667vw;
      padding: 0 4.8vw;
      border-radius: 4vw;
      max-width: 40.6667vw;
      text-align: center;
    }

    .active {
      font-weight: 700;
      color: var(--primary-color);
      background-color: #e3ede4;
      border: 0.2667vw solid var(--primary-color);
    }
  }
}

.count-bar {
  padding: 0 2.1333vw;
}

.btn {
  width: 100vw;
  box-sizing: border-box;
  padding: 0 4.8vw 0.5vw;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
