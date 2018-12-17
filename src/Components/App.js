import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import PrivateRoute from 'src/Containers/PrivateRoute'

import ErrorBoundary from './pages/ErrorBoundary'
import * as routes from './routes'

const App = () => (
  <ErrorBoundary>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <PrivateRoute path="/dashboard" exact component={routes.AsyncDashBoard} />
      <PrivateRoute path="/goal/:id" exact component={routes.AsyncGoalDetail} />
      <PrivateRoute
        path="/objective/:id"
        exact
        component={routes.AsyncObjectiveDetail}
      />
      <Route path="/welcome" exact component={routes.AsyncWelcome} />
      <Route component={routes.AsyncNotFound} />
    </Switch>
  </ErrorBoundary>
)

export default App
