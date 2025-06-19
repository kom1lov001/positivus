import { createWebHistory, createRouter } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";
// import LandingPageView from "../views/nexcent/LandingView.vue";
// import back from "../views/back.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
if (import.meta.hot) {
  handleHotUpdate(router);
}
export default router;
