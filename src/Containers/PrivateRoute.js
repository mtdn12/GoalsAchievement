import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { getAuth } from '../Stores/Authentication/Selectors'
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location, ...props }) => {
        // Wait firebase check authenticated
        if (auth) {
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
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  auth: PropTypes.object,
}

const mapStateToProps = state => ({
  auth: getAuth(state),
})

export default connect(mapStateToProps)(PrivateRoute)
