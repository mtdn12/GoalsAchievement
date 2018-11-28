import Loadable from 'react-loadable'

import LoadingPage from './pages/LoadingPage'

// Not Found Page
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound' /* webpackChunkName: "NotFound" */),
  loading: LoadingPage,
})

// DashBoad page
export const AsyncDashBoard = Loadable({
  loader: () => import('src/Containers/DashBoard'),
  loading: LoadingPage,
})
