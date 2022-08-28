import { defineStore } from "pinia"
import { getVeriCode, reqLogin } from "@/service/api/user"

export const useUserStore = defineStore("user", {
  state: () => ({
    account: "请先登录",
    avatar: "",
    token: "",
    showPopup: false,
  }),
  getters: {},
  actions: {
    getVeriCode() {
      return new Promise((resolve, reject) => {
        getVeriCode().then((res) => {
          if (res.code == 1) resolve(true)
        })
      })
    },
    reqLogin(data) {
      return new Promise((resolve, reject) => {
        reqLogin(data).then((res) => {
          if (res.code != "1") return
          const { account, avatar, token } = res.result
          this.account = account
          this.avatar = avatar
          this.token = token
          // 登陆成功关闭popup层
          this.showPopup = false
          resolve(true)
        })
      })
    },
  },
  persist: {
    key: "user",
    storage: window.localStorage,
    // 数组里面指定哪个变量的数据保存, 默认全部保存
    // paths: ['user', 'obj.a']
  },
})
