import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AnimeDetails from "../views/AnimeDetails.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/animes/:id",
    name: "anime",
    component: AnimeDetails,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
