import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Template from 'src/Components/templates/Template'
import { ModalActions } from '../Stores/Modal/Actions'

class TemplateContainer extends Component {
  render() {
    return <Template {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(TemplateContainer)
