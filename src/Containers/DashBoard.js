import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import DashBoard from 'src/Components/pages/DashBoard'
import goalSaga from '../Stores/Goal/Sagas'
import { GoalActions } from '../Stores/Goal/Actions'
import { getGoals, getLoadingItems } from '../Stores/Goal/Selectors'

class DashBoardContainer extends Component {
  componentDidMount() {
    this.props.handleGetListGoal()
  }
  componentWillUnmount() {
    this.props.handleClearGoals()
  }
  pushGoalDetail = id => () => {
    this.props.history.push(`/goal/${id}`)
  }
  render() {
    return <DashBoard pushGoalDetail={this.pushGoalDetail} {...this.props} />
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
