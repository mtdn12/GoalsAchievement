import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { object, string, func } from 'prop-types'
import { BookActions } from '../Stores/Book/Actions'
import { WordActions } from '../Stores/Word/Actions'
import { TodoActions } from '../Stores/Todo/Actions'
import { DiaryActions } from '../Stores/Diary/Actions'
import ConfirmationDialog from '../Components/molecules/ConfirmationDialog'

class ConfirmationDialogContainer extends Component {
  handleConfirm = () => {
    const {
      values,
      type,
      deleteBook,
      deleteWord,
      deleteTodo,
      deleteDailyTodo,
      deleteDiary,
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
      case 'deleteDiary':
        deleteDiary(values)
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
  // Delete diary
  deleteDiary: values => dispatch(DiaryActions.deleteItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

ConfirmationDialogContainer.propTypes = {
  values: object,
  type: string.isRequired,
  deleteBook: func.isRequired,
  deleteWord: func.isRequired,
  deleteTodo: func.isRequired,
  deleteDailyTodo: func.isRequired,
  deleteDiary: func.isRequired,
}
export default compose(withConnect)(ConfirmationDialogContainer)
