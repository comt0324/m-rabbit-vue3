import { BASE_URL, TIME_OUT } from "./request/config"
import LyRequest from "./request/request"
const lyRequest = new LyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export default lyRequest
