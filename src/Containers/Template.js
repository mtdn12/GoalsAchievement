import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Template from 'src/Components/templates/Template'
import { AuthActions } from '../Stores/Authentication/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import { getAuth } from '../Stores/Authentication/Selectors'
import firebase from '../Stores/Firebase/Firebase'

class TemplateContainer extends Component {
  static propTypes = {
    clearAuth: func.isRequired,
  }
  handleLogout = () => {
    firebase.doSignOut()
    this.props.clearAuth()
  }
  render() {
    return <Template {...this.props} handleLogout={this.handleLogout} />
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
})
//   isAuthenticated: getAuthenticated(state),
//   profile: getProfile(state),
//   auth: getAuth(state),
// })

const mapDispatchToProps = dispatch => ({
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
  // Clear user data
  clearAuth: () => dispatch(AuthActions.clearUser()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  withRouter
)(TemplateContainer)
