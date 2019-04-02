import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { TodoActions } from '../Stores/Todo/Actions'
import '../Stores/Todo/Sagas'
import '../Stores/Todo/Reducers'
import Todo from '../Components/pages/Todo'
import {
  getTodos,
  getLoadingTodos,
  getLoadingAction,
} from '../Stores/Todo/Selectors'

class TodoContainer extends Component {
  state = {
    formItem: {
      id: 0,
      todo: '',
    },
  }
  componentDidMount() {
    const { getTodos } = this.props
    getTodos()
  }
  componentWillUnmount() {
    const { clearTodos } = this.props
    clearTodos()
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
    const { createTodo, editTodo } = this.props
    values.id
      ? editTodo(values, this.handleResetFormItem)
      : createTodo(values, callback)
  }
  render() {
    return (
      <Todo
        formItem={this.state.formItem}
        handleAction={this.handleAction}
        handleSetFormItem={this.handleSetFormItem}
        handleResetFormItem={this.handleResetFormItem}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  todos: getTodos(state),
  isLoadingTodos: getLoadingTodos(state),
  isLoadingAction: getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  // Get list and clear todos
  getTodos: () => dispatch(TodoActions.getTodosRequest()),
  clearTodos: () => dispatch(TodoActions.clearTodos()),
  // Create todo
  createTodo: (values, callback) =>
    dispatch(TodoActions.createTodoRequest(values, callback)),
  // Edit todo
  editTodo: (values, callback) =>
    dispatch(TodoActions.editTodoRequest(values, callback)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(TodoContainer)
