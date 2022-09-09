<template>
  <div class="address-popup">
    <van-popup
      v-model:show="isShowPopup"
      closeable
      round
      :close-on-click-overlay="false"
      close-icon="close"
      position="bottom"
      @click-close-icon="closeAddressPopup"
      :style="{ height: '70%' }"
    >
      <van-address-list
        v-if="addressList.length"
        v-model="chosenAddressId"
        :list="addressList"
        add-button-text="确定"
        default-tag-text="默认"
        @add="confirmClick"
      />
      <div v-else class="tip"><span>您未登录，无法查看地址数据</span></div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from "vue"
// const isShowPopup = ref(false)
const porps = defineProps({
  isShowPopup: {
    type: Boolean,
    default: false,
  },
  addressList: {
    type: Array,
    default: [],
  },
})

const chosenAddressId = ref(0)

const emit = defineEmits(["closeAddressPopup"])
const closeAddressPopup = () => {
  emit("closeAddressPopup")
}

// // 选中地址
// const currentAddress = ref("")
// const selectClick = (item) => {
//   currentAddress.value = item.address
// }

// 点击确定
const confirmClick = () => {
  const address = porps.addressList[chosenAddressId.value]?.address || "空"
  emit("closeAddressPopup", address)
}
</script>

<style scoped lang="less">
.tip {
  display: flex;
  justify-content: center;
  margin-top: 5.3333vw;
}
</style>
