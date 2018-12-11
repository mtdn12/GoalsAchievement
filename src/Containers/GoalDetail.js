import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { GoalActions } from '../Stores/Goal/Actions'
import { getGoal, getLoadingItem } from '../Stores/Goal/Selectors'
import goalSaga from '../Stores/Goal/Sagas'
import GoalDetail from '../Components/pages/GoalDetail'

class GoalDetailContainer extends Component {
  componentDidMount() {
    const { match, handleGetGoalDetail } = this.props
    handleGetGoalDetail(match.params.id)
  }
  componentWillUnmount() {
    this.props.handleClearItem()
  }
  render() {
    return <GoalDetail {...this.props} />
  }
}

const mapStateToProps = state => ({
  item: getGoal(state),
  isLoadingItem: getLoadingItem(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetGoalDetail: id => dispatch(GoalActions.getItemRequest(id)),
  handleClearItem: () => dispatch(GoalActions.clearItem()),
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
)(GoalDetailContainer)
