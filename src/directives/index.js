import hanldePrice from "./handle-price"
import { Lazyload } from "vant"

export default function directives(app) {
  hanldePrice(app)
  app.use(Lazyload)
}
