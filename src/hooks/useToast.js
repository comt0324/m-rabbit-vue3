import "vant/es/toast/style"
import { Toast } from "vant"

export function useToast() {
  return { showToast, cleanToast }
}

const showToast = (message = "加载中...", duration = 0) => {
  Toast.loading({
    message,
    duration,
    loadingType: "spinner",
  })
}

const cleanToast = () => {
  Toast.clear()
}
