import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'
import Template from 'src/Components/templates/Template'
import { ModalActions } from '../Stores/Modal/Actions'
import { 
  getAuthenticated,
  getProfile,
 } from '../Stores/Authentication/selectors'

class TemplateContainer extends Component {
  handleLogout = () => {
    this.props.firebase.logout()
    this.props.history.push('/')
  }
  render() {
    return <Template {...this.props} handleLogout={this.handleLogout} />
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getAuthenticated(state),
  profile: getProfile(state),
})

const mapDispatchToProps = dispatch => ({
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  withFirebase,
  withRouter
)(TemplateContainer)
