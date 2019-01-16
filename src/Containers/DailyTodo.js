import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { is } from 'immutable'
import withSaga from '../Utils/withSaga'
import { TodoActions } from '../Stores/Todo/Actions'
import todoSaga from '../Stores/Todo/Sagas'
import DailyTodo from '../Components/pages/DailyTodo'
import {
  getDailyTodos,
  getLoadingDailyTodos,
  getLoadingAction,
} from '../Stores/Todo/Selectors'

class DailyTodoContainer extends Component {
  state = {
    formItem: {
      id: 0,
      todo: '',
    },
  }
  componentDidMount() {
    const { getDailyTodos } = this.props
    getDailyTodos()
  }
  componentWillUnmount() {
    const { clearDailyTodos } = this.props
    clearDailyTodos()
  }
  handleGoBack = () => {
    const { history } = this.props
    history.push('/todo')
  }
  handleSetFormItem = item => e => {
    e.stopPropagation()
    const formItem = {
      id: item.get('_id'),
      todo: item.get('todo'),
    }
    this.setState({ formItem })
  }
  handleResetFormItem = () => {
    this.setState({
      formItem: {
        id: 0,
        todo: '',
      },
    })
  }
  handleAction = (values, callback) => {
    const { createDailyTodo, editDailyTodo } = this.props
    values.id
      ? editDailyTodo(values, this.handleResetFormItem)
      : createDailyTodo(values, callback)
  }
  render() {
    return (
      <DailyTodo
        formItem={this.state.formItem}
        handleAction={this.handleAction}
        handleSetFormItem={this.handleSetFormItem}
        handleResetFormItem={this.handleResetFormItem}
        handleGoBack={this.handleGoBack}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  dailyTodos: getDailyTodos(state),
  isLoadingDailyTodos: getLoadingDailyTodos(state),
  isLoadingAction: getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  // Get list and clear todos
  getDailyTodos: () => dispatch(TodoActions.getDailyTodosRequest()),
  clearDailyTodos: () => dispatch(TodoActions.clearDailyTodos()),
  // Create daily todo
  createDailyTodo: (values, callback) =>
    dispatch(TodoActions.createDailyTodoRequest(values, callback)),
  // Edit dailty todo
  editDailyTodo: (values, callback) =>
    dispatch(TodoActions.editDailyTodoRequest(values, callback)),
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
)(DailyTodoContainer)
