import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import withSaga from '../Utils/withSaga'
import objectiveSaga from '../Stores/Objective/Sagas'
import { ObjectiveActions } from '../Stores/Objective/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import { withRouter } from 'react-router-dom'
import ObjectiveInfo from '../Components/organisms/ObjectiveInfo'

class ObjectiveInfoContainer extends Component {
  handleOpenModalEditObjective = () => {
    const { item } = this.props
    const editItem = {
      name: item.get('name'),
      timeEnd: moment(item.get('timeEnd')).format('YYYY-MM-DD'),
      description: item.get('description'),
      id: item.get('_id'),
      goalId: item.get('goal'),
    }
    this.props.handleOpenModal('CreateEditObjectiveModal', {
      item: editItem,
      action: 'edit',
      handleAction: values =>
        this.props.handleEditObjective(values, this.props.match),
    })
  }
  handleDeleteObjectiveAction = () => {
    const { item } = this.props
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Confirm Delete Objective',
      content: 'Do you want to delete this Objective',
      onConfirm: () =>
        this.props.handleDeleteObjective(
          item.get('_id'),
          item.get('goal'),
          this.props.match
        ),
    })
  }
  render() {
    return (
      <ObjectiveInfo
        handleOpenModalEditObjective={this.handleOpenModalEditObjective}
        handleDeleteObjectiveAction={this.handleDeleteObjectiveAction}
        {...this.props}
      />
    )
  }
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // Open modal
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
  // Edit Objective
  handleEditObjective: (values, match) =>
    dispatch(ObjectiveActions.editItemRequest(values, match)),
  // Delete Objective
  handleDeleteObjective: (id, goalId, match) =>
    dispatch(ObjectiveActions.deleteItemRequest(id, goalId, match)),
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
  withRouter,
  withConnect
)(ObjectiveInfoContainer)
