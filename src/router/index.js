import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { RouteNames } from './RouteNames';

const PeopleView = () => import('../views/PeopleView.vue');
const PersonEdit = () => import('../views/PersonEdit.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.HOME,
      component: HomeView,
    },
    {
      path: '/people',
      name: RouteNames.PEOPLE,
      component: PeopleView,
      children: [
        {
          path: ':personId/edit',
          name: RouteNames.PERSON_EDIT,
          component: PersonEdit,
        },
      ],
    },
  ],
});

export default router;
