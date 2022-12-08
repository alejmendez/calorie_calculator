import { piniaInstance } from './pinia'
import { routerInstance } from './router'

export const initLibs = (app) => {
  app
    .use(piniaInstance)
    .use(routerInstance)
}
