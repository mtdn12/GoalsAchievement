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

// Welcome page
export const AsyncWelcome = Loadable({
  loader: () => import('./pages/Welcome'),
  loading: LoadingPage,
})

// Goal detail page
export const AsyncGoalDetail = Loadable({
  loader: () => import('src/Containers/GoalDetail'),
  loading: LoadingPage,
})

// Objective detail page
export const AsyncObjectiveDetail = Loadable({
  loader: () => import('src/Containers/ObjectiveDetail'),
  loading: LoadingPage,
})

// Strategy page detail
export const AsyncStrategyDetail = Loadable({
  loader: () => import('src/Containers/StrategyDetail'),
  loading: LoadingPage,
})
