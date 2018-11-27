import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from 'src/Containers/PrivateRoute'

import ErrorBoundary from './pages/ErrorBoundary'
import * as routes from './routes'

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route path="/login" component={routes.AsyncLogin} />
      <Redirect exact from="/" to="/dashboard" />
      <PrivateRoute path="/dashboard" exact component={routes.AsyncHomepage} />

      <Route component={routes.AsyncNotFound} />
    </Switch>
  </ErrorBoundary>
)

export default App
