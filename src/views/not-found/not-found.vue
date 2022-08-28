<template>
  <div class="not-found">
    NotFound
    <span style="color: var(--primary-color)">{{
      route.params.pathMatch
    }}</span>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<style scoped lang="less">
.not-found {
  display: flex;
  justify-content: center;
  margin: 26.6667vw auto;
}
</style>
