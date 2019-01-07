import React from 'react'
import { connect } from 'react-redux'

import { ModalActions } from 'src/Stores/Modal/Actions'
import { getModal, getLoadingAction } from 'src/Stores/Modal/Selectors'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import CreateEditGoalModal from './CreateEditGoalModal'
import ConfirmationDialog from './ConfirmationDialog'
import CreateEditObjectiveModal from './CreateEditObjectiveModal'
import CreateEditStrategyModal from './CreateEditStrategyModal'
import CreateEditTaticModal from './CreateEditTaticModal'
import CreateEditActionModal from './CreateEditActionModal'
import CreateEditBookModal from './CreateEditBookModal'
import AddEditReviewModal from './AddEditReviewModal'
import CreateEditWordModal from './CreateEditWordModal'

const modalLookup = {
  RegisterModal,
  LoginModal,
  CreateEditGoalModal,
  ConfirmationDialog,
  CreateEditObjectiveModal,
  CreateEditStrategyModal,
  CreateEditTaticModal,
  CreateEditActionModal,
  CreateEditBookModal,
  AddEditReviewModal,
  CreateEditWordModal,
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
