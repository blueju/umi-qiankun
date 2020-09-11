import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/first', component: '@/pages/first/index' },
    { path: '/second', component: '@/pages/second/index' },
  ],
  qiankun: {
    slave: {}
  }
});
