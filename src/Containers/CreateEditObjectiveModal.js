import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { ObjectiveActions } from '../Stores/Objective/Actions'
import objectiveSaga from '../Stores/Objective/Sagas'
import CreateEditObjectiveModal from '../Components/organisms/CreateEditObjectiveModal'

class CreateEditObjectiveModalContainer extends Component {
  handleAction = values => {
    const {
      action,
      match,
      handleCreateObjective,
      handleEditObjective,
    } = this.props
    switch (action) {
      case 'create':
        handleCreateObjective(values)
        break
      case 'edit':
        handleEditObjective(values, match)
        break
      default:
    }
  }
  render() {
    return (
      <CreateEditObjectiveModal
        handleAction={this.handleAction}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle Edit goal
  handleEditObjective: (values, match) =>
    dispatch(ObjectiveActions.editItemRequest(values, match)),
  // handle Create goal
  handleCreateObjective: values =>
    dispatch(ObjectiveActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withObjectiveSaga = withSaga({
  key: 'objective',
  saga: objectiveSaga,
})

export default compose(
  withObjectiveSaga,
  withConnect
)(CreateEditObjectiveModalContainer)
