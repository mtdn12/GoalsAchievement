import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { BookActions } from '../Stores/Book/Actions'
import { WordActions } from '../Stores/Word/Actions'
import { TodoActions } from '../Stores/Todo/Actions'
import ConfirmationDialog from '../Components/molecules/ConfirmationDialog'

class ConfirmationDialogContainer extends Component {
  handleConfirm = () => {
    const {
      values,
      match,
      type,
      handleDeleteGoal,
      handleDeleteObjective,
      handleDeleteStrategy,
      handleDeleteTatic,
      handleDeleteAction,
      deleteBook,
      deleteWord,
      deleteTodo,
      deleteDailyTodo,
    } = this.props
    switch (type) {
      case 'book':
        deleteBook(values)
        break
      case 'word':
        deleteWord(values)
        break
      case 'todo':
        deleteTodo(values)
        break
      case 'dailyTodo':
        deleteDailyTodo(values)
        break
      default:
    }
  }
  render() {
    return <ConfirmationDialog onConfirm={this.handleConfirm} {...this.props} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  deleteBook: values => dispatch(BookActions.deleteItemRequest(values)),
  // Delete word
  deleteWord: values => dispatch(WordActions.deleteItemRequest(values)),
  // Delete Todo
  deleteTodo: values => dispatch(TodoActions.deleteTodoRequest(values)),
  // Delete daily Todo
  deleteDailyTodo: values =>
    dispatch(TodoActions.deleteDailyTodoRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ConfirmationDialogContainer)
