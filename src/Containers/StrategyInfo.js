import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import withSaga from '../Utils/withSaga'
import strategySaga from '../Stores/Strategy/Sagas'
import { ModalActions } from '../Stores/Modal/Actions'
import StrategyInfo from '../Components/organisms/StrategyInfo'

class StrategyInfoContainer extends Component {
  handleOpenModalEditStrategy = () => {
    const { item } = this.props
    const editItem = {
      name: item.get('name'),
      timeEnd: moment(item.get('timeEnd')).format('YYYY-MM-DD'),
      description: item.get('description'),
      id: item.get('_id'),
      goalId: item.get('goal'),
      objectiveId: item.get('objective'),
    }
    this.props.handleOpenModal('CreateEditStrategyModal', {
      item: editItem,
      action: 'edit',
      match: this.props.match,
    })
  }
  handleDeleteStrategyAction = () => {
    const { item } = this.props
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Confirm Delete Strategy',
      content: 'Do you want to delete this Strategy',
      type: 'strategy',
      values: item,
      match: this.props.match,
    })
  }
  render() {
    return (
      <StrategyInfo
        handleOpenModalEditStrategy={this.handleOpenModalEditStrategy}
        handleDeleteStrategyAction={this.handleDeleteStrategyAction}
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
  withRouter,
  withConnect
)(StrategyInfoContainer)
