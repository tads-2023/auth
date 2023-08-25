import { createRouter, createWebHistory } from 'vue-router'; 

import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Profile from '../views/Profile.vue';
import EditProfile from '../views/EditProfile.vue';

const routes = [
  { path: '/', component: SignIn },
  { path: '/sign-up', component: SignUp },
  { path: '/profile', component: Profile },
  { path: '/profile/edit', component: EditProfile },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;