import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
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
    path: "/crafts",
    name: "Crafts",
    component: () => import(/* webpackChunkName: "crafts" */ "@/views/Crafts.vue"),
  },
  {
    path: "/programs",
    name: "Programs",
    component: () => import(/* webpackChunkName: "programs" */ "@/views/Programs.vue"),
  },
  {
    path: "/social",
    name: "Social",
    component: () => import(/* webpackChunkName: "social" */ "@/views/Social.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
