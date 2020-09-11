import { dynamic } from 'umi';
import LoadingComponent from '@/components/PageLoading';

let extraRoutes: object[] = [];

export const qiankun = fetch('/api/config')
  .then((res) => {
    return res.json();
  })
  .then(({ apps }) => {
    return Promise.resolve({
      // 注册子应用信息
      apps,
      // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
      lifeCycles: {
        afterMount: (props) => {
          console.log(props);
        },
      },
      // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    });
  });

export function patchRoutes({ routes }) {
  extraRoutes.forEach((element) => {
    routes[1].routes[0].routes.unshift({
      name: element.name,
      icon: 'smile',
      path: element.path,
      component: dynamic({
        loader: () =>
          import(/* webpackChunkName: 'layouts__MicroAppLayout' */ '@/layouts/MicroAppLayout'),
        loading: LoadingComponent,
      }),
    });
  });
}

export async function render(oldRender) {
  fetch('/api/config')
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      extraRoutes = resJson.routes;
      oldRender();
    });
}
