import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { func, object } from 'prop-types'
import { TodoActions } from '../Stores/Todo/Actions'
import '../Stores/Todo/Sagas'
import '../Stores/Todo/Reducers'
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

DailyTodoContainer.propTypes = {
  createDailyTodo: func.isRequired,
  editDailyTodo: func.isRequired,
  history: object.isRequired,
  getDailyTodos: func.isRequired,
  clearDailyTodos: func.isRequired,
}

export default compose(withConnect)(DailyTodoContainer)
