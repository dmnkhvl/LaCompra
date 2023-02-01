import { createApp, watch } from "vue";
import App from "./App.vue";
import router from "./router";
import { IonicVue } from "@ionic/vue";
import { createPinia } from "pinia";
/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";
/* Theme variables */
import "./theme/variables.css";

const pinia = createPinia();

const stateFromLocalStorage = localStorage.getItem("state");
if (stateFromLocalStorage) {
  pinia.state.value = JSON.parse(stateFromLocalStorage);
}
watch(
  pinia.state,
  (state) => {
    localStorage.setItem("state", JSON.stringify(state));
  },
  { deep: true }
);

const app = createApp(App).use(IonicVue).use(router).use(pinia);
import { useListStore } from "@/store/listStore";
export const listStore = useListStore();
router.isReady().then(() => {
  app.mount("#app");
});