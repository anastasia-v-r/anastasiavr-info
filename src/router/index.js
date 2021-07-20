import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Content",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Content.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import( "@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
