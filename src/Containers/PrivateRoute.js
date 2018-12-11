import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import {
  getAuthenticated,
  getLoadedAuthen,
} from '../Stores/Authentication/selectors'
import LoadingPage from '../Components/pages/LoadingPage'
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isLoadedAuthen,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location, ...props }) => {
        // Wait firebase check authenticated
        if (isLoadedAuthen) {
          if (isAuthenticated) {
            return <Component location={location} {...props} />
          }
          // Nếu chưa login thì đưa về trang welcome
          return (
            <Redirect
              to={{
                pathname: '/welcome',
                state: { from: location },
              }}
            />
          )
        } else {
          return <LoadingPage />
        }
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  userData: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    isAuthenticated: getAuthenticated(state),
    isLoadedAuthen: getLoadedAuthen(state),
  }
}

export default connect(mapStateToProps)(PrivateRoute)
