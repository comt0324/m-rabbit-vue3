import lyRequest from "@/service"

export const getVeriCode = (mobile = "13888888888") => {
  return lyRequest.get("/login/code", {
    params: {
      mobile,
    },
  })
}

export const reqLogin = ({ mobile, code }) => {
  return lyRequest.post("/login/code", {
    data: {
      mobile,
      code,
    },
  })
}
