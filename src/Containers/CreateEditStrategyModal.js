import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { StrategyActions } from '../Stores/Strategy/Actions'
import strategySaga from '../Stores/Strategy/Sagas'
import CreateEditStrategyModal from '../Components/organisms/CreateEditStrategyModal'

class CreateEditStrategyModalContainer extends Component {
  handleAction = values => {
    const {
      action,
      match,
      handleCreateStrategy,
      handleEditStrategy,
    } = this.props
    switch (action) {
      case 'create':
        handleCreateStrategy(values)
        break
      case 'edit':
        handleEditStrategy(values, match)
        break
      default:
    }
  }
  render() {
    return (
      <CreateEditStrategyModal
        handleAction={this.handleAction}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle Edit Strategy
  handleEditStrategy: (values, match) =>
    dispatch(StrategyActions.editItemRequest(values, match)),
  // handle Create Strategy
  handleCreateStrategy: values =>
    dispatch(StrategyActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withStrategySaga = withSaga({
  key: 'strategy',
  saga: strategySaga,
})

export default compose(
  withStrategySaga,
  withConnect
)(CreateEditStrategyModalContainer)
