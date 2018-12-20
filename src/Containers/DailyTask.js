import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { DailyTaskActions } from '../Stores/DailyTask/Actions'
import dailyTaskSaga from '../Stores/DailyTask/Sagas'
import { getLoadingTasks, getTasks } from '../Stores/DailyTask/Selectors'
import DailyTask from '../Components/pages/DailyTask'

class DailyTaskContainer extends Component {
  render() {
    return <DailyTask {...this.props} />
  }
}

const mapStateToProps = state => ({
  items: getTasks(state),
  isLoadingItem: getLoadingTasks(state),
})

const mapDispatchToProps = dispatch => ({
  // get list task
  handleGetTasks: () => dispatch(DailyTaskActions.getItemsRequest()),
  // clear list task
  handleClearTasks: () => dispatch(DailyTaskActions.clearItems()),
  // check task
  handleCheckTask: id => dispatch(DailyTaskActions.checkItemRequest(id)),
  // uncheck task
  handleUncheckTask: id => dispatch(DailyTaskActions.uncheckItemRequest(id)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withDailyTaskSaga = withSaga({
  key: 'dailyTask',
  saga: dailyTaskSaga,
})

export default compose(
  withDailyTaskSaga,
  withConnect
)(DailyTaskContainer)
