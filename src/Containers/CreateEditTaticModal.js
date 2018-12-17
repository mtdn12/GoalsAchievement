import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withSaga from '../Utils/withSaga'
import { TaticActions } from '../Stores/Tatic/Actions'
import taticSaga from '../Stores/Tatic/Sagas'
import CreateEditTaticModal from '../Components/organisms/CreateEditTaticModal'

class CreateEditTaticModalContainer extends Component {
  handleAction = values => {
    const { action, match, handleCreateTatic, handleEditTatic } = this.props
    switch (action) {
      case 'create':
        handleCreateTatic(values)
        break
      case 'edit':
        handleEditTatic(values, match)
        break
      default:
    }
  }
  render() {
    return (
      <CreateEditTaticModal handleAction={this.handleAction} {...this.props} />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle Edit Strategy
  handleEditTatic: (values, match) =>
    dispatch(TaticActions.editItemRequest(values, match)),
  // handle Create Strategy
  handleCreateTatic: values => dispatch(TaticActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withTaticSaga = withSaga({
  key: 'tatic',
  saga: taticSaga,
})

export default compose(
  withTaticSaga,
  withConnect
)(CreateEditTaticModalContainer)
