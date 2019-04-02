import Loadable from 'react-loadable'

import LoadingPage from './pages/LoadingPage'

// Not Found Page
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound' /* webpackChunkName: "NotFound" */),
  loading: LoadingPage,
})

// Welcome page
export const AsyncWelcome = Loadable({
  loader: () => import('./pages/Welcome'),
  loading: LoadingPage,
})

// Book control page
export const AsyncBook = Loadable({
  loader: () => import('src/Containers/Book'),
  loading: LoadingPage,
})

// Book detail page
export const AsyncBookDetail = Loadable({
  loader: () => import('src/Containers/BookDetail'),
  loading: LoadingPage,
})

// Word control page
export const AsyncWord = Loadable({
  loader: () => import('src/Containers/Word'),
  loading: LoadingPage,
})

// Word detail page
export const AsyncWordDetail = Loadable({
  loader: () => import('src/Containers/WordDetail'),
  loading: LoadingPage,
})

// Todo page

export const AsyncTodo = Loadable({
  loader: () => import('src/Containers/Todo'),
  loading: LoadingPage,
})

// Daily todo page
export const AsyncDailyTodo = Loadable({
  loader: () => import('src/Containers/DailyTodo'),
  loading: LoadingPage,
})

// Todo history page
export const AsyncTodoHistory = Loadable({
  loader: () => import('src/Containers/TodoHistory'),
  loading: LoadingPage,
})

// Diary page
export const AsyncDiary = Loadable({
  loader: () => import('src/Containers/Diary'),
  loading: LoadingPage,
})

// Diary detail page

export const AsyncDiaryDetail = Loadable({
  loader: () => import('src/Containers/DiaryDetail'),
  loading: LoadingPage,
})
