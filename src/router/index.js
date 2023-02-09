import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import ToDo from "../views/ToDo.vue";


Vue.use(VueRouter);

const routes = [
  
  {
    path: "/todo",
    name: "todo",
    component: ToDo,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  
];
const router = new VueRouter({
    routes
  })
export default router;