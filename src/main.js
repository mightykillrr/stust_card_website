import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);

app.mount("#app");
