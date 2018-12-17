import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { GoalActions } from '../Stores/Goal/Actions'
import goalSaga from '../Stores/Goal/Sagas'
import CreateEditGoalModal from '../Components/organisms/CreateEditGoalModal'

class CreateEditGoalModalContainer extends Component {
  handleAction = values => {
    const { action, match, handleCreateGoal, handleEditGoal } = this.props
    switch (action) {
      case 'create':
        handleCreateGoal(values)
        break
      case 'edit':
        handleEditGoal(values, match)
        break
      default:
    }
  }
  render() {
    return (
      <CreateEditGoalModal handleAction={this.handleAction} {...this.props} />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle Edit goal
  handleEditGoal: (values, match) =>
    dispatch(GoalActions.editItemRequest(values, match)),
  // handle Create goal
  handleCreateGoal: values => dispatch(GoalActions.createItemRequest(values)),
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
)(CreateEditGoalModalContainer)
