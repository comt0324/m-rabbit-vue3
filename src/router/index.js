import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  // 一级路由
  {
    path: "/",
    component: () => import("@/views/layout.vue"),
    redirect: "/home",
    // 二级路由
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/home.vue"),
      },
      {
        path: "/category",
        component: () => import("@/views/category/category.vue"),
      },
      {
        path: "/cart",
        component: () => import("@/views/cart/cart.vue"),
      },
      {
        path: "/user",
        component: () => import("@/views/user/user.vue"),
      },
    ],
  },
  // 404NotFound
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-found/not-found.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
