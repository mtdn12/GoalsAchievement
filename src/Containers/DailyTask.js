import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { DailyTaskActions } from '../Stores/DailyTask/Actions'
import dailyTaskSaga from '../Stores/DailyTask/Sagas'
import {
  getLoadingTasks,
  getTasks,
  getLoadingCheck,
} from '../Stores/DailyTask/Selectors'
import DailyTask from '../Components/pages/DailyTask'

class DailyTaskContainer extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.handleGetTasks()
  }
  componentWillUnmount() {
    this.props.handleClearTasks()
  }
  render() {
    return <DailyTask {...this.props} />
  }
}
const mapStateToProps = state => {
  return {
    items: getTasks(state),
    isLoadingItems: getLoadingTasks(state),
    isLoadingCheck: getLoadingCheck(state),
  }
}

const mapDispatchToProps = dispatch => ({
  // get list task
  handleGetTasks: () => dispatch(DailyTaskActions.getItemsRequest()),
  // clear list task
  handleClearTasks: () => dispatch(DailyTaskActions.clearItems()),
  // check task
  handleCheckTask: id => () => dispatch(DailyTaskActions.checkItemRequest(id)),
  // uncheck task
  handleUncheckTask: id => () =>
    dispatch(DailyTaskActions.uncheckItemRequest(id)),
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