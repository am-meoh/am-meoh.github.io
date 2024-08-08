import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import router from "./router";
import auth0 from "./auth0";

const app = createApp(App);

app.use(router).use(auth0).mount("#app");
