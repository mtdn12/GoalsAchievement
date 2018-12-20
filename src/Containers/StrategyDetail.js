import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import { StrategyActions } from '../Stores/Strategy/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import { TaticActions } from '../Stores/Tatic/Actions'
import strategySaga from '../Stores/Strategy/Sagas'
import { getItem, getLoadingItem } from '../Stores/Strategy/Selectors'
import withSaga from '../Utils/withSaga'
import StrategyDetail from '../Components/pages/StrategyDetail'

class StrategyDetailContainer extends Component {
  componentDidMount() {
    const { match, handleGetStrategyDetail } = this.props
    handleGetStrategyDetail(match.params.id)
  }
  componentWillUnmount() {
    this.props.handleClearStrategyDetail()
  }
  handleOpenModalEditStrategy = () => {
    const { item } = this.props
    const editItem = {
      name: item.get('name'),
      timeEnd: moment(item.get('timeEnd')).format('YYYY-MM-DD'),
      description: item.get('description'),
      id: item.get('_id'),
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
      values: item,
      match: this.props.match,
      type: 'strategy',
    })
  }
  handleGoBack = () => {
    let path =
      this.props.location.state && this.props.location.state.from
        ? this.props.location.state.from
        : '/dashboard'
    this.props.history.push(path)
  }
  handleOpenModalCreateTatic = () => {
    const { item, handleOpenModal } = this.props
    const itemCreate = {
      strategyId: item.get('_id'),
      timeEnd: '',
      name: '',
      description: '',
      timeInWeek: [],
    }
    handleOpenModal('CreateEditTaticModal', {
      item: itemCreate,
      action: 'create',
    })
  }
  render() {
    return (
      <StrategyDetail
        handleOpenModalEditStrategy={this.handleOpenModalEditStrategy}
        handleDeleteStrategyAction={this.handleDeleteStrategyAction}
        handleOpenModalCreateTatic={this.handleOpenModalCreateTatic}
        handleGoBack={this.handleGoBack}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  item: getItem(state),
  isLoadingItem: getLoadingItem(state),
})

const mapDispatchToProps = dispatch => ({
  // Get strategy detail
  handleGetStrategyDetail: id => dispatch(StrategyActions.getItemRequest(id)),
  // Clear strategy detail in redux
  handleClearStrategyDetail: () => dispatch(StrategyActions.clearItem()),
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
  withConnect
)(StrategyDetailContainer)
