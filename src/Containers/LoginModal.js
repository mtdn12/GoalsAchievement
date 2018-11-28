import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoginModal from 'src/Components/organisms/LoginModal'

class LoginModalContainer extends Component {
  render() {
    return <LoginModal {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDisPatchToProps = dispatch => ({})

const withConnect = connect(
  mapStateToProps,
  mapDisPatchToProps
)

export default compose(withConnect)(LoginModalContainer)
