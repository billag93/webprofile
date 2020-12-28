import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/contact",
    name: "contact-page",
    component: Contact
  },
  {
    path: "/about",
    name: "about-page",
    component: About
  },
  {
    path: "/portfolio",
    name: "portfolio-page",
    component: Portfolio
  },

];

const router = new VueRouter({
  routes
});

export default router;
