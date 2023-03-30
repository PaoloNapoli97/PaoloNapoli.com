import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import MyContacts from "./pages/MyContacts.vue"
import AboutMe from "./pages/AboutMe.vue"
import ContactMe from "./pages/ContactMe.vue"
import Page404 from "./pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: "/*",
        redirect: '/home'
    },
    {
      path: "/home",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/home/contacts",
      name: "contacts",
      component: MyContacts,
    },
    {
        path: "/home/about-me",
        name: "about-me",
        component: AboutMe,
    },
    {
        path: "/home/contact-me",
        name: "contact-me",
        component: ContactMe,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
  ],
});

export { router };