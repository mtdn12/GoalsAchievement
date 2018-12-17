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
    })
  }
  handleOpenModalEditGoal = item => () => {
    this.props.handleOpenModal('CreateEditGoalModal', {
      item,
      action: 'edit',
      match: this.props.match,
    })
  }
  handleDeleteGoalAction = values => () => {
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Confirm Delete Goal',
      content: 'Do you want to delete this goal',
      type: 'goal',
      match: this.props.match,
      values,
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
