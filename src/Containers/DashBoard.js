import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import DashBoard from 'src/Components/pages/DashBoard'
import goalSaga from '../Stores/Goal/Sagas'
import { GoalActions } from '../Stores/Goal/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import { getGoals, getLoadingItems } from '../Stores/Goal/Selectors'

class DashBoardContainer extends Component {
  componentDidMount() {
    this.props.handleGetListGoal()
  }
  componentWillUnmount() {
    this.props.handleClearGoals()
  }
  handleOpenModalCreateGoal = () => {
    const item = {
      name: '',
      timeEnd: '',
      description: '',
    }
    this.props.handleOpenModal('CreateEditGoalModal', {
      item,
      action: 'create',
      handleAction: values => this.props.handleCreateGoal(values),
    })
  }
  handleOpenModalEditGoal = item => () => {
    this.props.handleOpenModal('CreateEditGoalModal', {
      item,
      action: 'edit',
      handleAction: values =>
        this.props.handleEditGoal(values, this.props.match),
    })
  }
  handleDeleteGoalAction = id => () => {
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Confirm Delete Goal',
      content: 'Do you want to delete this goal',
      onConfirm: () => this.props.handleDeleteGoal(id, this.props.match),
    })
  }
  pushGoalDetail = id => () => {
    this.props.history.push(`/goal/${id}`)
  }
  render() {
    return (
      <DashBoard
        handleOpenModalCreateGoal={this.handleOpenModalCreateGoal}
        handleOpenModalEditGoal={this.handleOpenModalEditGoal}
        handleDeleteGoalAction={this.handleDeleteGoalAction}
        pushGoalDetail={this.pushGoalDetail}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  goals: getGoals(state),
  isLoadingItems: getLoadingItems(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetListGoal: () => dispatch(GoalActions.getItemsRequest()),
  // clear item when dismount
  handleClearGoals: () => dispatch(GoalActions.clearItems()),
  // Open modal
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
  // handle Create goal
  handleCreateGoal: values => dispatch(GoalActions.createItemRequest(values)),
  // handle Edit goal
  handleEditGoal: (values, match) =>
    dispatch(GoalActions.editItemRequest(values, match)),
  // delete goal
  handleDeleteGoal: (id, match) =>
    dispatch(GoalActions.deleteItemRequest(id, match)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withGoalSaga = withSaga({
  key: 'goal',
  saga: goalSaga,
})

export default compose(
  withGoalSaga,
  withConnect
)(DashBoardContainer)
