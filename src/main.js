import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import BaseButton from "./components/ui/BaseButton.vue";

const useImage = (url) => {
  return new URL(`/src/${url}`, import.meta.url).href;
};

const app = createApp(App);
app.config.globalProperties.$image = useImage;
app.component("BaseButton", BaseButton);

app.mount("#app");
