import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingleTaskView from "../views/SingleTaskView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/task/:id",
    name: "task",
    component: SingleTaskView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
