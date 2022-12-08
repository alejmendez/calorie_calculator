import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from '../routes'

export const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes,
});
