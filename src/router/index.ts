import { LOGIN_TOKEN } from '@/global/constants';
import { localCache } from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/not-found.vue')
    }
  ]
});

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN);

  if (to.path.startsWith('/main') && !token) {
    return '/login';
  }
});

export default router;
