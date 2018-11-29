import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoginModal from 'src/Components/organisms/LoginModal'
import { AuthActions } from 'src/Stores/Authentication/Actions'

class LoginModalContainer extends Component {
  render() {
    return <LoginModal {...this.props} />
  }
}
const mapStateToProps = state => ({})
const mapDisPatchToProps = dispatch => ({
  handleLogin: values => dispatch(AuthActions.loginRequest(values)),
  handleSocialLogin: provider =>
    dispatch(AuthActions.socialLoginRequest(provider)),
})

const withConnect = connect(
  mapStateToProps,
  mapDisPatchToProps
)

export default compose(withConnect)(LoginModalContainer)
