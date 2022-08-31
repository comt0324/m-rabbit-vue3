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
    />
  </div>
</template>

<script setup>
// import { ref } from "vue"
// const isShowPopup = ref(false)
defineProps({
  isShowPopup: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["closeAddressPopup"])
const closeAddressPopup = () => {
  emit("closeAddressPopup")
}
</script>

<style scoped lang="less"></style>
