import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UnternehmenPage from "../pages/UnternehmenPage.vue";
import KontaktPage from "../pages/KontaktPage.vue";
import LegalPage from "../pages/LegalPage.vue";
import HomePageEN from "../pages/HomePageEN.vue";
import UnternehmenPageEN from "../pages/UnternehmenPageEN.vue";
import ContactPageEN from "../pages/ContactPageEN.vue";
import HomePageBKS from "../pages/HomePageBKS.vue";
import UnternehmenPageBKS from "../pages/UnternehmenPageBKS.vue";
import KontaktPageBKS from "../pages/KontaktPageBKS.vue";
import HomePageAL from "../pages/HomePageAL.vue";
import NotFound from "../pages/NotFound.vue";
import KontaktPageAL from "../pages/KontaktPageAL.vue"
const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
    history: createWebHistory(import.meta.env.BASE_URL),
      
    routes:[
       
        {
            path: "/",
            name: "bewerben",
            component: HomePage
        },
        
        {
            path: "/en",
            name: "work",
            component: HomePageEN
        },
        {
            path: "/bks",
            name: "posao",
            component: HomePageBKS,
        },
        {
            path: "/unternehmen/",
            name: "unternehmen",
            component: UnternehmenPage
        },
        {
            path: "/employers",
            name: "employers",
            component: UnternehmenPageEN
        },
        {
            path: "/poslodavci",
            name: "poslodavci",
            component: UnternehmenPageBKS
        },
        
        {
            path: "/kontakt/",
            name: "kontakt",
            component: KontaktPage
        },
        {
            path: "/contact/",
            name: "contact",
            component: ContactPageEN,
        },
        {
            path: "/prijava",
            name: "prijava",
            component: KontaktPageBKS
        },
        {
            path: "/legal/",
            name: "legal",
            component: LegalPage
        },
        {
            path: "/al",
            name: "workAL",
            component: HomePageAL
        },
        {
            path: "/nakontaktoni",
            name: "nakontaktoni",
            component: KontaktPageAL                   
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound
        },
        
    ]
});
export default router