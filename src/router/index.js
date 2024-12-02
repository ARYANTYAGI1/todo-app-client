import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from "@/views/Dashboard.vue";
import Signup from '@/views/auth/Signup.vue';
import Login from '@/views/auth/Login.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
