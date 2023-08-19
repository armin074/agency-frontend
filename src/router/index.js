import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UnternehmenPage from "../pages/UnternehmenPage.vue";
import UberunsPage from "../pages/UberunsPage.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "bewerben",
            component: HomePage
        },
        {
            path: "/unternehmen",
            name: "unternehmen",
            component: UnternehmenPage
        },
        {
            path: "/uberuns",
            name: "uberuns",
            component: UberunsPage
        }
    ]
})
export default router