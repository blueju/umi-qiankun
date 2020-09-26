export default {
  '/api/config': {
    apps: [
      {
        name: 'sub-app-1',
        entry: '//localhost:8001',
      },
      {
        name: 'sub-app-2',
        entry: '//localhost:8002',
      },
    ],
    routes: [
      {
        name: 'sub-app-1',
        path: '/sub-app-1',
      },
      {
        name: 'sub-app-2',
        path: '/sub-app-2',
      },
    ],
  },
};
