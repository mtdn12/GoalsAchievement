import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import RegisterModal from 'src/Components/organisms/RegisterModal'

class RegisterModalContainer extends Component {
  render() {
    return <RegisterModal {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDisPatchToProps = dispatch => ({})

const withConnect = connect(
  mapStateToProps,
  mapDisPatchToProps
)

export default compose(withConnect)(RegisterModalContainer)
