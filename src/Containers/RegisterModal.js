import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthActions } from '../Stores/Authentication/Actions'
import RegisterModal from 'src/Components/organisms/RegisterModal'

class RegisterModalContainer extends Component {
  render() {
    return <RegisterModal {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDisPatchToProps = dispatch => ({
  handleRegister: values => dispatch(AuthActions.registerRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDisPatchToProps
)

export default compose(withConnect)(RegisterModalContainer)
