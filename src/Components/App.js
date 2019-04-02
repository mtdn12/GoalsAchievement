import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from 'src/Containers/PrivateRoute'

import ErrorBoundary from './pages/ErrorBoundary'
import * as routes from './routes'

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Redirect exact from="/" to="/book" />
      <PrivateRoute path="/book" exact component={routes.AsyncBook} />
      <PrivateRoute path="/book/:id" exact component={routes.AsyncBookDetail} />
      <PrivateRoute path="/word" exact component={routes.AsyncWord} />
      <PrivateRoute path="/todo" exact component={routes.AsyncTodo} />
      <PrivateRoute
        path="/todo/daily"
        exact
        component={routes.AsyncDailyTodo}
      />
      <PrivateRoute
        path="/todo/history"
        exact
        component={routes.AsyncTodoHistory}
      />
      <PrivateRoute path="/diary" exact component={routes.AsyncDiary} />
      <PrivateRoute
        path="/diary/:id"
        exact
        component={routes.AsyncDiaryDetail}
      />
      <PrivateRoute path="/word/:id" exact component={routes.AsyncWordDetail} />
      <Route path="/welcome" exact component={routes.AsyncWelcome} />
      <Route component={routes.AsyncNotFound} />
    </Switch>
  </ErrorBoundary>
)

export default App
