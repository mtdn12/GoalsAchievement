import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { func, object } from 'prop-types'
import { BookActions } from '../Stores/Book/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import { withRouter } from 'react-router-dom'

import BookItem from '../Components/molecules/BookItem'

class BookItemContainer extends Component {
  openModalEditBook = e => {
    e.stopPropagation()
    const { item, openModal } = this.props
    const itemEdit = {
      id: item.get('_id'),
      title: item.get('title'),
      author: item.get('author'),
      status: item.get('status'),
      rate: item.get('rate'),
      review: item.get('review'),
    }
    openModal('CreateEditBookModal', {
      item: itemEdit,
      action: 'edit',
    })
  }
  openModalDeleteBook = e => {
    e.stopPropagation()
    const { item, openModal } = this.props
    openModal('ConfirmationDialog', {
      values: item,
      title: 'Confirm Delete Book',
      content: 'Do you want to delete this Book',
      type: 'book',
    })
  }
  handleChangeStatus = (e, { value }) => {
    const { item, changeStatus } = this.props
    if (value === item.get('status')) return
    changeStatus(item.get('_id'), value)
  }
  seeBookDetail = () => {
    const { item, history } = this.props
    history.push(`/book/${item.get('_id')}`)
  }
  render() {
    return (
      <BookItem
        openModalDeleteBook={this.openModalDeleteBook}
        openModalEditBook={this.openModalEditBook}
        handleChangeStatus={this.handleChangeStatus}
        seeBookDetail={this.seeBookDetail}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // Open modal
  openModal: (type, props) => dispatch(ModalActions.setModal(type, props)),
  // Chnage status
  changeStatus: (id, status) =>
    dispatch(BookActions.changeStatusRequest(id, status)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
BookItemContainer.propTypes = {
  item: object.isRequired,
  openModal: func.isRequired,
  changeStatus: func.isRequired,
  history: object.isRequired,
}

export default compose(
  withConnect,
  withRouter
)(BookItemContainer)
