import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import withSaga from '../Utils/withSaga'
import taticSaga from '../Stores/Tatic/Sagas'
import { ModalActions } from '../Stores/Modal/Actions'
import TaticInfo from '../Components/organisms/TaticInfo'

class TaticInfoContainer extends Component {
  handleOpenModalEditTatic = () => {
    const { item } = this.props
    const editItem = {
      name: item.get('name'),
      timeEnd: moment(item.get('timeEnd')).format('YYYY-MM-DD'),
      description: item.get('description'),
      id: item.get('_id'),
      goalId: item.get('goal'),
      strategyId: item.get('strategy'),
      timeInWeek: item.get('timeInWeek'),
    }
    this.props.handleOpenModal('CreateEditTaticModal', {
      item: editItem,
      action: 'edit',
      match: this.props.match,
    })
  }
  handleDeleteTaticAction = () => {
    const { item } = this.props
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Confirm Delete Tatic',
      content: 'Do you want to delete this Tatic',
      type: 'tatic',
      values: item,
      match: this.props.match,
    })
  }
  render() {
    return (
      <TaticInfo
        handleOpenModalEditTatic={this.handleOpenModalEditTatic}
        handleDeleteTaticAction={this.handleDeleteTaticAction}
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
const withTaticSaga = withSaga({
  key: 'tatic',
  saga: taticSaga,
})

export default compose(
  withTaticSaga,
  withRouter,
  withConnect
)(TaticInfoContainer)
