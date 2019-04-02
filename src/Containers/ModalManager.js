import React from 'react'
import { connect } from 'react-redux'
import { ModalActions } from 'src/Stores/Modal/Actions'
import '../Stores/Modal/Reducers'
import { getModal, getLoadingAction } from 'src/Stores/Modal/Selectors'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import ConfirmationDialog from './ConfirmationDialog'
import CreateEditBookModal from './CreateEditBookModal'
import AddEditReviewModal from './AddEditReviewModal'
import CreateEditWordModal from './CreateEditWordModal'
import TodoHistoryDetailModal from '../Components/organisms/TodoHistoryDetailModal'
import CreateEditDiaryModal from './CreateEditDiaryModal'

const modalLookup = {
  RegisterModal,
  LoginModal,
  ConfirmationDialog,
  CreateEditBookModal,
  AddEditReviewModal,
  CreateEditWordModal,
  TodoHistoryDetailModal,
  CreateEditDiaryModal,
}

const Modal = props => {
  const { modal, isLoadingAction, handleClose } = props
  if (modal) {
    const { modalType, modalProps } = modal.toJS()
    const ModalShow = modalLookup[modalType]
    return (
      <ModalShow
        isLoadingAction={isLoadingAction}
        handleClose={handleClose}
        {...modalProps}
      />
    )
  }
  return <span />
}

const mapStateToProps = state => ({
  modal: getModal(state),
  isLoadingAction: getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(ModalActions.clearModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
