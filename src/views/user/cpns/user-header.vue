<template>
  <div class="header">
    <img class="img" :src="watchCurAvatar" alt="" />
    <div class="infos">
      <div class="top">
        <span @click="login">{{ watchCurText }}</span>
      </div>
      <div class="bottom" v-if="token">
        <span @click="exitUser">退出登录</span>
      </div>
    </div>
    <div class="arrow">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useUserStore } from "@/store"
import { storeToRefs } from "pinia"
import { Dialog } from "vant"
import "vant/es/dialog/style"

const userStore = useUserStore()
const { showPopup, avatar, account, token } = storeToRefs(userStore)

// 头像
const watchCurAvatar = computed(() => {
  let result
  if (token.value) {
    result = avatar.value
  } else {
    result = "src/assets/img/avatar.png"
  }
  return result
})

// 用户名
const watchCurText = computed(() => {
  let curText
  if (token.value) {
    curText = account.value
  } else {
    curText = "请先登录"
  }
  return curText
})

// 登录功能
const login = () => {
  if (token.value) return
  showPopup.value = true
}
// 退出登录功能
const exitUser = () => {
  Dialog.confirm({
    title: "退出登录",
  }).then(() => {
    userStore.avatar = ""
    userStore.account = ""
    userStore.token = ""
  })
}
</script>

<style scoped lang="less">
.header {
  padding: 2.6667vw 0 2.667vw 6vw;
  display: flex;
  color: #f3f3f3;

  .img {
    width: 16vw;
    border-radius: 50%;
  }

  .infos {
    flex: 1;
    margin-left: 4.6667vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .top {
      font-size: 4.2667vw;
      font-weight: 700;
    }
  }

  .arrow {
    width: 8vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
