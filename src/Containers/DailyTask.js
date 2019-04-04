import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { func } from 'prop-types'
import { DailyTaskActions } from '../Stores/DailyTask/Actions'
import '../Stores/DailyTask/Sagas'
import '../Stores/DailyTask/Reducers'
import {
  getLoadingTasks,
  getTasks,
  getLoadingCheck,
} from '../Stores/DailyTask/Selectors'
import DailyTask from '../Components/pages/DailyTask'

class DailyTaskContainer extends Component {
  componentDidMount() {
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

DailyTaskContainer.propTypes = {
  handleGetTasks: func.isRequired,
  handleClearTasks: func.isRequired,
}

export default compose(withConnect)(DailyTaskContainer)
