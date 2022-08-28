<template>
  <van-form>
    <van-popup
      v-model:show="showPopup"
      closeable
      close-icon="close"
      position="bottom"
      @click-close-icon="onClosePopup"
      :style="{ height: '100%' }"
    >
      <van-cell-group inset>
        <van-field
          v-model="phone"
          name="validator"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ validator, message: '请输入正确的手机号' }]"
        />
        <van-field
          v-model="veriCode"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button
              size="small"
              color="var(--primary-color)"
              @click="getVeriCode"
              >{{ countDowmText }}</van-button
            >
          </template>
        </van-field>
        <div class="btn">
          <van-button color="var(--primary-color)" block @click="handleLogin"
            >登录</van-button
          >
        </div>
      </van-cell-group>
    </van-popup>
  </van-form>
</template>

<script setup>
import { ref } from "vue"
import { useUserStore } from "@/store"
import { storeToRefs } from "pinia"

// 关闭popup层
const userStore = useUserStore()
const { showPopup } = storeToRefs(userStore)
const onClosePopup = () => {
  showPopup.value = false
}

// 手机号的校验
const phone = ref("13888888888")
const phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
const validator = (val) => phoneReg.test(val)

// 验证码
const veriCode = ref("")
const countDowmText = ref("获取验证码")
const getVeriCode = async () => {
  let isSend = await userStore.getVeriCode()
  if (isSend) {
    veriCode.value = "123456"
    updateCountDownText()
    isSend = false
  }
}
let timer
const updateCountDownText = () => {
  let num = 60
  timer = setInterval(() => {
    countDowmText.value = `${--num}s`
    if (num < 0) {
      clearInterval(timer)
      countDowmText.value = "获取验证码"
    }
  }, 1000)
}

// 登录
const handleLogin = () => {
  const query = {
    mobile: phone.value,
    code: veriCode.value,
  }
  userStore.reqLogin(query).then(() => {
    veriCode.value = ""
    countDowmText.value = "获取验证码"
    clearInterval(timer)
  })
}
</script>

<style scoped lang="less">
.van-cell {
  padding: 5.3333vw;
}
.van-cell-group {
  padding: 5.3333vw 0;
}
.van-cell-group--inset {
  margin-top: 53.3333vw;
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 3.3333vw;

  .van-button--block {
    width: 80%;
  }
}
</style>
