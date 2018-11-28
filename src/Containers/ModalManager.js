import React from 'react'
import { connect } from 'react-redux'

import { ModalActions } from 'src/Stores/Modal/Actions'
import { getModal, getLoadingAction } from 'src/Stores/Modal/Selectors'

const modalLookup = {}

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
