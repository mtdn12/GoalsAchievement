import Loadable from 'react-loadable'

import LoadingPage from './pages/LoadingPage'

export const AsyncLogin = Loadable({
  loader: () =>
    import('src/Containers/LoginPage' /* webpackChunkName: "LoginPage" */),
  loading: LoadingPage,
})

// Not Found Page
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound' /* webpackChunkName: "NotFound" */),
  loading: LoadingPage,
})

// Semantic-UI Homepage
export const AsyncHomepage = Loadable({
  loader: () =>
    import('src/Containers/Homepage' /* webpackChunkName: "Homepage" */),
  loading: LoadingPage,
})
