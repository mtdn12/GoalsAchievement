import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { object, func, string } from 'prop-types'
import { TodoActions } from '../Stores/Todo/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import TodoItem from '../Components/molecules/TodoItem'
import '../Stores/Todo/Reducers'
import { getLoadingCheck } from '../Stores/Todo/Selectors'

class TodoItemContainer extends Component {
  openModalDeleteTodo = e => {
    e.stopPropagation()
    const { item, openModal, type } = this.props
    openModal('ConfirmationDialog', {
      values: item,
      title: 'Confirm Delete Task',
      content: 'Do you want to delete this Task',
      type: type,
    })
  }
  handleCheckTodo = () => {
    const { checkTodo, uncheckTodo, item, isLoadingCheck } = this.props
    if (isLoadingCheck.get(item.get('_id'))) return
    item.get('isComplete')
      ? uncheckTodo(item.get('_id'))
      : checkTodo(item.get('_id'))
  }
  render() {
    return (
      <TodoItem
        openModalDeleteTodo={this.openModalDeleteTodo}
        handleCheckTodo={this.handleCheckTodo}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  isLoadingCheck: getLoadingCheck(state),
})

const mapDispatchToProps = dispatch => ({
  // Check and uncheck item
  checkTodo: id => dispatch(TodoActions.checkTodoRequest(id)),
  uncheckTodo: id => dispatch(TodoActions.uncheckTodoRequest(id)),
  // handle open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

TodoItemContainer.propTypes = {
  item: object.isRequired,
  openModal: func.isRequired,
  type: string.isRequired,
  checkTodo: func.isRequired,
  uncheckTodo: func.isRequired,
  isLoadingCheck: object.isRequired,
}

export default compose(withConnect)(TodoItemContainer)
