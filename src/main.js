import { createApp } from 'vue'
import App from './App.vue'
// modules
import Vuesax from "vuesax3";
import store from "@/store/auth";
// CSS
import "vuesax3/dist/vuesax.css";
import "tailwindcss/tailwind.css";
import "./app.css";
import router from "@/router/routes";


createApp(App)
    .use(Vuesax)
    .use(store)
    .use(router)
    .mount('#app')
