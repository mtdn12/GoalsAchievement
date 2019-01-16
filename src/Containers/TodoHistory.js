import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { is } from 'immutable'
import withSaga from '../Utils/withSaga'
import { TodoActions } from '../Stores/Todo/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import todoSaga from '../Stores/Todo/Sagas'
import TodoHistory from '../Components/pages/TodoHistory'
import {
  getHistories,
  getLoadingHistories,
  getHistoryFilter,
  getHistoryPages,
} from '../Stores/Todo/Selectors'

class TodoHistoryContainer extends Component {
  componentDidMount() {
    const { getHistories } = this.props
    getHistories()
  }
  componentWillUnmount() {
    const { clearHistories } = this.props
    clearHistories()
  }
  componentDidUpdate(prevProps) {
    const { filter, getHistories } = this.props
    if (!is(prevProps.filter, filter)) {
      getHistories()
    }
  }
  handleGoBack = () => {
    const { history } = this.props
    history.push('/todo')
  }
  showHistoryDetail = items => () => {
    const { openModal } = this.props
    openModal('TodoHistoryDetailModal', {
      items,
    })
  }
  render() {
    return (
      <TodoHistory
        {...this.props}
        handleGoBack={this.handleGoBack}
        showHistoryDetail={this.showHistoryDetail}
      />
    )
  }
}

const mapStateToProps = state => ({
  histories: getHistories(state),
  isLoadingHistories: getLoadingHistories(state),
  filter: getHistoryFilter(state),
  totalPages: getHistoryPages(state),
})

const mapDispatchToProps = dispatch => ({
  // Get list and clear hstories
  getHistories: () => dispatch(TodoActions.getHistoriesRequest()),
  clearHistories: () => dispatch(TodoActions.clearHistories()),
  // Set filter
  setFilter: (name, value) =>
    dispatch(TodoActions.setHistoryFilter(name, value)),
  // Open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withTodoSaga = withSaga({
  key: 'todo',
  saga: todoSaga,
})

export default compose(
  withConnect,
  withTodoSaga
)(TodoHistoryContainer)
