import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
// import withSaga from '../Utils/withSaga'
// import goalSaga from '../Stores/Goal/Sagas'
// import objectiveSaga from '../Stores/Objective/Sagas'
// import strategySaga from '../Stores/Strategy/Sagas'
// import taticSaga from '../Stores/Tatic/Sagas'
import { GoalActions } from '../Stores/Goal/Actions'
import { ObjectiveActions } from '../Stores/Objective/Actions'
import { StrategyActions } from '../Stores/Strategy/Actions'
import { TaticActions } from '../Stores/Tatic/Actions'
import ConfirmationDialog from '../Components/molecules/ConfirmationDialog'

class ConfirmationDialogContainer extends Component {
  handleConfirm = () => {
    const {
      values,
      match,
      type,
      handleDeleteGoal,
      handleDeleteObjective,
      handleDeleteStrategy,
      handleDeleteTatic,
    } = this.props
    switch (type) {
      case 'goal':
        console.log('goese here')
        handleDeleteGoal(values, match)
        break
      case 'objective':
        handleDeleteObjective(values, match)
        break
      case 'strategy':
        handleDeleteStrategy(values, match)
        break
      case 'tatic':
        handleDeleteTatic(values, match)
        break
      default:
    }
  }
  render() {
    return <ConfirmationDialog onConfirm={this.handleConfirm} {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  handleDeleteGoal: (values, match) =>
    dispatch(GoalActions.deleteItemRequest(values, match)),
  handleDeleteObjective: (values, match) =>
    dispatch(ObjectiveActions.deleteItemRequest(values, match)),
  handleDeleteStrategy: (values, match) =>
    dispatch(StrategyActions.deleteItemRequest(values, match)),
  handleDeleteTatic: (values, match) =>
    dispatch(TaticActions.deleteItemRequest(values, match)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
// const withGoalSaga = withSaga({
//   key: 'goal',
//   saga: goalSaga,
// })

export default compose(
  // withGoalSaga,
  withConnect
)(ConfirmationDialogContainer)
