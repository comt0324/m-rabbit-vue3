<template>
  <div ref="backtopRef" class="back-top">
    <van-icon
      name="back-top"
      size="8vw"
      color="var(--primary-color)"
      @click="backTop"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  curRef: {
    type: Object,
    default: () => ({}),
  },
})
const backTop = () => {
  props.curRef.scrollTo(0, 0)
}
</script>

<style scoped lang="less">
.back-top {
  position: fixed;
  bottom: 20vw;
  right: 3.3333vw;
  z-index: 9999;
}
</style>
