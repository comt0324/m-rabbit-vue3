// 根据process.env.NODE_ENV的值区分环境
// 开发环境: development
// 生产环境: production
// 测试环境: test
let TIME_OUT = 10000
let BASE_URL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://pcapi-xiaotuxian-front-devtest.itheima.net"
  // BASE_URL = "https://apipc-xiaotuxian-front.itheima.net"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "xxxx"
} else {
  BASE_URL = "xxxx"
}

export { TIME_OUT, BASE_URL }
