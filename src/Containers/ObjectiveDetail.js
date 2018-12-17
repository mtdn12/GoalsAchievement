import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import withSaga from '../Utils/withSaga'
import objectiveSaga from '../Stores/Objective/Sagas'
import strategySaga from '../Stores/Strategy/Sagas'
import { ObjectiveActions } from '../Stores/Objective/Actions'
import { StrategyActions } from '../Stores/Strategy/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import { getItem, getLoadingItem } from '../Stores/Objective/Selectors'
import ObjectiveDetail from '../Components/pages/ObjectiveDetail'

class ObjectiveDetailContainer extends Component {
  componentDidMount() {
    // Request get objecdetail
    const { match, handleGetObjectiveDetail } = this.props
    handleGetObjectiveDetail(match.params.id)
  }
  componentWillUnmount() {
    // Clear data objective detail in redux
    this.props.handleClearObjectiveDetail()
  }
  handleOpenModalEditObjective = () => {
    const { item } = this.props
    const editItem = {
      name: item.get('name'),
      timeEnd: moment(item.get('timeEnd')).format('YYYY-MM-DD'),
      description: item.get('description'),
      id: item.get('_id'),
      goalId: item.get('goal'),
    }
    this.props.handleOpenModal('CreateEditObjectiveModal', {
      item: editItem,
      action: 'edit',
      handleAction: values =>
        this.props.handleEditObjective(values, this.props.match),
    })
  }
  handleDeleteObjectiveAction = () => {
    const { item } = this.props
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Confirm Delete Objective',
      content: 'Do you want to delete this Objective',
      onConfirm: () =>
        this.props.handleDeleteObjective(
          item.get('_id'),
          item.get('goal'),
          this.props.match
        ),
    })
  }
  handleOpenModalCreateStrategy = () => {
    const item = {
      name: '',
      objectiveId: this.props.match.params.id,
      goalId: this.props.item.get('goal'),
      timeEnd: '',
      description: '',
    }
    this.props.handleOpenModal('CreateEditStrategyModal', {
      item,
      action: 'create',
      handleAction: values => this.props.handleCreateStrategy(values),
    })
  }
  handleGoBack = () => {
    let path =
      this.props.location.state && this.props.location.state.from
        ? this.props.location.state.from
        : '/dashboard'
    this.props.history.push(path)
  }
  render() {
    return (
      <ObjectiveDetail
        handleOpenModalEditObjective={this.handleOpenModalEditObjective}
        handleDeleteObjectiveAction={this.handleDeleteObjectiveAction}
        handleOpenModalCreateStrategy={this.handleOpenModalCreateStrategy}
        handleGoBack={this.handleGoBack}
        {...this.props}
      />
    )
  }
}
const mapStateToProps = state => ({
  item: getItem(state),
  isLoadingItem: getLoadingItem(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetObjectiveDetail: id => dispatch(ObjectiveActions.getItemRequest(id)),
  handleClearObjectiveDetail: () => dispatch(ObjectiveActions.clearItem()),
  // Open modal
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
  // Edit Objective
  handleEditObjective: (values, match) =>
    dispatch(ObjectiveActions.editItemRequest(values, match)),
  // Delete Objective
  handleDeleteObjective: (id, goalId, match) =>
    dispatch(ObjectiveActions.deleteItemRequest(id, goalId, match)),
  // Create strategy
  handleCreateStrategy: values =>
    dispatch(StrategyActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
const withObjectiveSaga = withSaga({
  key: 'objective',
  saga: objectiveSaga,
})
const withStrategySaga = withSaga({
  key: 'strategy',
  saga: strategySaga,
})

export default compose(
  withObjectiveSaga,
  withStrategySaga,
  withConnect
)(ObjectiveDetailContainer)
