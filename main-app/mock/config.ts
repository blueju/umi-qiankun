export default {
  '/api/config': {
    apps: [
      {
        name: 'sub-app-1',
        entry: '//localhost:8001',
      },
    ],
    routes: [
      {
        name: 'sub-app-1',
        path: '/sub-app-1',
      },
    ],
  },
};
