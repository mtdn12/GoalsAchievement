import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import '../Stores/Book/Sagas'
import '../Stores/Book/Reducers'
import { BookActions } from '../Stores/Book/Actions'
import { ModalActions } from '../Stores/Modal/Actions'

import { getBook, getLoadingBook } from '../Stores/Book/Selectors'

import BookDetail from '../Components/pages/BookDetail'

class BookDetailContainer extends Component {
  componentDidMount() {
    const { match, getItemRequest } = this.props
    getItemRequest(match.params.id)
  }
  componentWillUnmount() {
    // Clear item when component unmount
    const { clearItem } = this.props
    clearItem()
  }
  handleGoBack = () => {
    const { history } = this.props
    history.push('/book')
  }
  openModalAddReview = () => {
    const { item, openModal } = this.props
    const itemAdd = {
      id: item.get('_id'),
      review: '',
      rate: '',
    }
    openModal('AddEditReviewModal', {
      item: itemAdd,
      action: 'create',
    })
  }
  openModalEditReview = () => {
    const { item, openModal } = this.props
    const itemEdit = {
      id: item.get('_id'),
      review: item.get('review'),
      rate: item.get('rate'),
    }
    openModal('AddEditReviewModal', {
      item: itemEdit,
      action: 'edit',
    })
  }
  render() {
    return (
      <BookDetail
        openModalAddReview={this.openModalAddReview}
        openModalEditReview={this.openModalEditReview}
        handleGoBack={this.handleGoBack}
        {...this.props}
      />
    )
  }
}
const mapStateToProps = state => ({
  item: getBook(state),
  isLoadingItem: getLoadingBook(state),
})

const mapDispatchToProps = dispatch => ({
  // get item request
  getItemRequest: id => dispatch(BookActions.getItemRequest(id)),
  // clear item
  clearItem: () => dispatch(BookActions.clearItem()),
  // open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(BookDetailContainer)
