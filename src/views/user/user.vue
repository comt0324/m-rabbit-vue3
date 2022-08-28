<template>
  <div class="user scroll-view">
    <div class="cover">
      <user-header />
      <user-content />
    </div>
    <login-popup />
  </div>
</template>

<script setup>
import UserHeader from "./cpns/user-header.vue"
import UserContent from "./cpns/user-content.vue"
import LoginPopup from "./cpns/login-popup.vue"
</script>

<style scoped lang="less">
.user {
  background-color: var(--gray-bg-color);

  .cover {
    height: 45vw;
    background: var(--primary-color);
    padding: 2.6667vw;
  }
}
</style>
