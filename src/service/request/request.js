import axios from "axios"
import { useUserStore } from "@/store"
import { storeToRefs } from "pinia"
import { useToast } from "@/hooks/useToast"

const { showToast, cleanToast } = useToast()

class LyRequest {
  constructor(config) {
    // 1.创建实例
    this.instance = axios.create(config)
    // 2.请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const userStore = useUserStore()
        const { token } = storeToRefs(userStore)
        if (token.value) {
          config.headers.Authorization = `Bearer ${token.value}`
        }
        // 开启loading
        if (config.showLoading) showToast()
        return config
      },
      (err) => {
        return new Promise(() => {})
      }
    )
    // 3.响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 关闭loading
        cleanToast()
        return res.data
      },
      (err) => {
        // 关闭loading
        cleanToast()
        throw Error(err)
        // return Promise.reject(err)
        return new Promise(() => {})
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    })
  }

  get(url, config) {
    return this.request({ ...config, method: "GET", url })
  }

  post(url, config) {
    return this.request({ ...config, method: "POST", url })
  }
}

export default LyRequest
