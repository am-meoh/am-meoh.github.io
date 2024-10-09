import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import auth0 from "./auth0";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).use(auth0);

app.mount("#app");
