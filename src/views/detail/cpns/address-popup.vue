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
        v-model="chosenAddressId"
        :list="addressList"
        add-button-text="确定"
        default-tag-text="默认"
        @select="selectClick"
        @add="confirmClick"
      />
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from "vue"
// const isShowPopup = ref(false)
defineProps({
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

// 选中地址
const currentAddress = ref("未选")
const selectClick = (item) => {
  currentAddress.value = item.address
}

// 点击确定
const confirmClick = () => {
  emit("closeAddressPopup", currentAddress)
}
</script>

<style scoped lang="less"></style>
