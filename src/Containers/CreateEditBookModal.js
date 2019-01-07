import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { BookActions } from '../Stores/Book/Actions'
import CreateEditBookModal from '../Components/organisms/CreateEditBookModal'

class CreateEditBookModalContainer extends Component {
  handleAction = values => {
    const { action, editBook, createBook } = this.props
    switch (action) {
      case 'create':
        createBook(values)
        break
      case 'edit':
        editBook(values)
        break
      default:
    }
  }
  render() {
    return (
      <CreateEditBookModal handleAction={this.handleAction} {...this.props} />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // handle Edit book
  editBook: values => dispatch(BookActions.editItemRequest(values)),
  // handle Create book
  createBook: values => dispatch(BookActions.createItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(CreateEditBookModalContainer)
