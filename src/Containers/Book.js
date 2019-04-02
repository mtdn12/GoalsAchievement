import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { is } from 'immutable'
import {  func, object  } from 'prop-types'
import '../Stores/Book/Sagas'
import '../Stores/Book/Reducers'
import { BookActions } from '../Stores/Book/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import {
  getBook,
  getFilter,
  getBooks,
  getLoadingBook,
  getLoadingBooks,
} from '../Stores/Book/Selectors'

import Book from '../Components/pages/Book'

class BookContainer extends Component {
  static propTypes = {
    filter: object.isRequired,
    getListBook: func.isRequired,
    clearListBook: func.isRequired,
    openModal: func.isRequired,
  }
  componentDidMount() {
    const { filter, getListBook } = this.props
    getListBook(filter.toJS())
  }
  componentWillUnmount() {
    this.props.clearListBook()
  }
  componentDidUpdate(prevProps) {
    const { filter, getListBook } = this.props
    if (!is(prevProps.filter, filter)) {
      getListBook(filter.toJS())
    }
  }
  openModalCreateBook = () => {
    const { openModal } = this.props
    const item = {
      title: '',
      author: '',
      status: 'reading',
    }
    openModal('CreateEditBookModal', {
      item,
      action: 'create',
    })
  }
  render() {
    return (
      <Book openModalCreateBook={this.openModalCreateBook} {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  books: getBooks(state),
  book: getBook(state),
  isLoadingBooks: getLoadingBooks(state),
  isLoadingBook: getLoadingBook(state),
  filter: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  getListBook: filter => dispatch(BookActions.getItemsRequest(filter)),
  clearListBook: () => dispatch(BookActions.clearItems()),
  // Open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
  // Change filter
  setFilter: (name, value) => dispatch(BookActions.setFilter(name, value)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(BookContainer)
