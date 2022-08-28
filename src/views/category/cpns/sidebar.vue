<template>
  <van-sidebar v-model="active">
    <template v-for="(item, index) in categoryList" :key="item.id">
      <van-sidebar-item :title="item.name" @click="itemClick(item.id)" />
    </template>
  </van-sidebar>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps({
  categoryList: {
    type: Array,
    default: () => [],
  },
})
const active = ref(0)

// 点击侧边item
const emit = defineEmits(["itemClick"])
const itemClick = (id) => {
  emit("itemClick", id)
}
</script>

<style scoped lang="less"></style>
