import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { ActionActions } from '../Stores/Action/Actions'
import actionSaga from '../Stores/Action/Sagas'
import CreateEditActionModal from '../Components/organisms/CreateEditActionModal'

class CreateEditActionModalContainer extends Component {
  handleAction = values => {
    const { action, handleCreateAction, handleEditAction } = this.props
    switch (action) {
      case 'create':
        handleCreateAction(values)
        break
      case 'edit':
        handleEditAction(values)
        break
      default:
    }
  }
  render() {
    return (
      <CreateEditActionModal handleAction={this.handleAction} {...this.props} />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle Edit Action
  handleEditAction: values => dispatch(ActionActions.editItemRequest(values)),
  // handle Create Action
  handleCreateAction: values =>
    dispatch(ActionActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withActionSaga = withSaga({
  key: 'action',
  saga: actionSaga,
})

export default compose(
  withActionSaga,
  withConnect
)(CreateEditActionModalContainer)
