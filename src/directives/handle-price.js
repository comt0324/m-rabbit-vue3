export default function hanldePrice(app) {
  app.directive("price", {
    mounted(el, bindlings) {
      handlePrice(el, bindlings)
    },
    updated(el, bindlings) {
      handlePrice(el, bindlings)
    },
  })
}

function handlePrice(el, bindlings) {
  if (!bindlings.value) return

  // 参数
  const type = bindlings.arg || "RMB"
  // 修饰符
  const toInt = bindlings.modifiers.toInt
  // 值
  let value = bindlings.value

  const typeObj = { RMB: "￥", dollar: "$" }
  const typeKeys = Object.keys(typeObj)

  const typeKey = typeKeys.find((item) => item === type)
  const typeValue = typeObj[typeKey]
  if (toInt) {
    value = Number(value).toFixed(0)
  }
  let price = `${typeValue}${value}`

  el.textContent = price
}
