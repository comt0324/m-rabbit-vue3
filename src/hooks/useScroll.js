import { onMounted, onUnmounted, ref } from "vue"
import _ from "lodash"

/**
 * 
  el: 监听谁的滚动
  diyY: 传入具体的高度, 当滚动的高度到达此高度会返回isReachDiyY变量
  elCalc: 对象  里面有各个实例对象
 */
export function useScroll(el, diyY = 1000, elsObj) {
  // 对elsObj数据的处理
  const elsKeys = Object.keys(elsObj)
  const elsValues = Object.values(elsObj)
  const isReachElsY = ref({})

  const isReachBottom = ref(false)
  const isReachDiyY = ref(false)
  // const isReachElY = ref(false)
  const hadScrollTop = ref(0)

  const scrollListenerHandler = () => {
    const { scrollHeight, clientHeight, scrollTop } = el.value
    hadScrollTop.value = scrollTop

    // 滚动到底部
    if (clientHeight + scrollTop >= scrollHeight) {
      isReachBottom.value = true
    } else {
      isReachBottom.value = false
    }
    // 滚动到某个位置
    if (scrollTop >= diyY) {
      isReachDiyY.value = true
    } else {
      isReachDiyY.value = false
    }
    // 滚动到某个实例的位置
    elsValues.forEach((el, index) => {
      const key = elsKeys[index]
      isReachElsY.value[key] = hadScrollTop.value >= el.value[key].offsetTop
    })
  }

  const throttleScrollListenerHandler = _.throttle(scrollListenerHandler, 100)

  onMounted(() => {
    el.value.addEventListener("scroll", throttleScrollListenerHandler, false)
  })
  onUnmounted(() => {
    el.value?.removeEventListener("scroll", throttleScrollListenerHandler)
  })

  return { isReachBottom, isReachDiyY, hadScrollTop, isReachElsY }
}
