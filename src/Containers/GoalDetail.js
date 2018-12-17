import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import withSaga from '../Utils/withSaga'
import { GoalActions } from '../Stores/Goal/Actions'
import { getGoal, getLoadingItem } from '../Stores/Goal/Selectors'
import { ModalActions } from '../Stores/Modal/Actions'
import { ObjectiveActions } from '../Stores/Objective/Actions'
import goalSaga from '../Stores/Goal/Sagas'
import objectiveSaga from '../Stores/Objective/Sagas'
import GoalDetail from '../Components/pages/GoalDetail'

class GoalDetailContainer extends Component {
  componentDidMount() {
    const { match, handleGetGoalDetail } = this.props
    handleGetGoalDetail(match.params.id)
  }
  componentWillUnmount() {
    this.props.handleClearItem()
  }
  handleOpenModalEditGoal = () => {
    const { item } = this.props
    const itemEdit = {
      name: item.get('name'),
      timeEnd: moment(item.get('timeEnd')).format('YYYY-MM-DD'),
      id: item.get('_id'),
      description: item.get('description'),
    }
    this.props.handleOpenModal('CreateEditGoalModal', {
      item: itemEdit,
      action: 'edit',
      handleAction: values =>
        this.props.handleEditGoal(values, this.props.match),
    })
  }
  handleDeleteGoalAction = () => {
    const { item } = this.props
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Confirm Delete Goal',
      content: 'Do you want to delete this goal',
      onConfirm: () =>
        this.props.handleDeleteGoal(item.get('_id'), this.props.match),
    })
  }
  handleOpenModalCreateObjective = () => {
    const item = {
      name: '',
      goalId: this.props.match.params.id,
      timeEnd: '',
      description: '',
    }
    this.props.handleOpenModal('CreateEditObjectiveModal', {
      item,
      action: 'create',
      handleAction: values => this.props.handleCreateObjective(values),
    })
  }
  render() {
    return (
      <GoalDetail
        handleOpenModalEditGoal={this.handleOpenModalEditGoal}
        handleDeleteGoalAction={this.handleDeleteGoalAction}
        handleOpenModalCreateObjective={this.handleOpenModalCreateObjective}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  item: getGoal(state),
  isLoadingItem: getLoadingItem(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetGoalDetail: id => dispatch(GoalActions.getItemRequest(id)),
  handleClearItem: () => dispatch(GoalActions.clearItem()),
  // Open modal
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
  // handle Edit goal
  handleEditGoal: (values, match) =>
    dispatch(GoalActions.editItemRequest(values, match)),
  // delete goal
  handleDeleteGoal: (id, match) =>
    dispatch(GoalActions.deleteItemRequest(id, match)),
  // Create Objective
  handleCreateObjective: values =>
    dispatch(ObjectiveActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withGoalSaga = withSaga({
  key: 'goal',
  saga: goalSaga,
})

const withObjectiveSaga = withSaga({
  key: 'objective',
  saga: objectiveSaga,
})
export default compose(
  withGoalSaga,
  withObjectiveSaga,
  withConnect
)(GoalDetailContainer)
