import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import taticSaga from '../Stores/Tatic/Sagas'
import { TaticActions } from '../Stores/Tatic/Actions'
import { getItem, getLoadingItem } from '../Stores/Tatic/Selectors'
import { getActions, getLoadingActions } from '../Stores/Action/Selectors'
import actionSaga from '../Stores/Action/Sagas'
import { ActionActions } from '../Stores/Action/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import TaticDetail from '../Components/pages/TaticDetail'

class TaticDetailContainer extends Component {
  componentDidMount() {
    // get tatic detail
    const { match, handleGetTaticRequest, handleGetActions } = this.props
    handleGetTaticRequest(match.params.id)
    handleGetActions(match.params.id)
  }
  componentWillUnmount() {
    // clear tatic detail in redux
    this.props.handleClearTatic()
    // Clear action list
    this.props.handleClearActions()
  }
  handleGoBack = () => {
    let path =
      this.props.location.state && this.props.location.state.from
        ? this.props.location.state.from
        : '/dashboard'
    this.props.history.push(path)
  }
  handleOpenModalCreateAction = () => {
    const { handleOpenModal, match } = this.props
    const item = {
      taticId: match.params.id,
      action: '',
    }
    handleOpenModal('CreateEditActionModal', {
      item,
      action: 'create',
    })
  }
  handleOpenModalEditAction = item => () => {
    this.props.handleOpenModal('CreateEditActionModal', {
      item,
      action: 'edit',
    })
  }
  handleDeleteAction = values => () => {
    this.props.handleOpenModal('ConfirmationDialog', {
      values,
      title: 'Confirm Delete Action',
      content: 'Do you want to delete this Action',
      type: 'action',
    })
  }
  render() {
    return (
      <TaticDetail
        handleOpenModalCreateAction={this.handleOpenModalCreateAction}
        handleOpenModalEditAction={this.handleOpenModalEditAction}
        handleGoBack={this.handleGoBack}
        handleDeleteAction={this.handleDeleteAction}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  item: getItem(state),
  isLoadingItem: getLoadingItem(state),
  actions: getActions(state),
  isLoadingActions: getLoadingActions(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetTaticRequest: id => dispatch(TaticActions.getItemRequest(id)),
  // clear tatic detail
  handleClearTatic: () => dispatch(TaticActions.clearItem()),
  // Get list action match with this tatic
  handleGetActions: id => dispatch(ActionActions.getItemsRequest(id)),
  // Clear List action
  handleClearActions: () => dispatch(ActionActions.clearItems()),
  // Open modal
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withTaticSaga = withSaga({
  key: 'tatic',
  saga: taticSaga,
})

const withActionSaga = withSaga({
  key: 'action',
  saga: actionSaga,
})

export default compose(
  withConnect,
  withActionSaga,
  withTaticSaga
)(TaticDetailContainer)
