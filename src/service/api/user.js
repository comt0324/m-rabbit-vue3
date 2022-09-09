import lyRequest from "@/service"

// 获取验证码
export const getVeriCode = (mobile = "13888888888") => {
  return lyRequest.get("/login/code", {
    params: {
      mobile,
    },
  })
}

// 登录
export const reqLogin = ({ mobile, code }) => {
  return lyRequest.post("/login/code", {
    data: {
      mobile,
      code,
    },
  })
}
