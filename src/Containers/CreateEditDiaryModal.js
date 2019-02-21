import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { DiaryActions } from '../Stores/Diary/Actions'
import { func, string } from 'prop-types'
import CreateEditDiaryModal from '../Components/organisms/CreateEditDiaryModal'

const CreateEditDiaryModalContainer = ({
  createDiary,
  editDiary,
  ...props
}) => {
  const handleAction = values => {
    switch (props.action) {
      case 'create':
        createDiary(values)
        break
      case 'edit':
        editDiary(values)
        break
      default:
        break
    }
  }

  return <CreateEditDiaryModal handleAction={handleAction} {...props} />
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // Create diary
  createDiary: values => dispatch(DiaryActions.createItemRequest(values)),
  // Edit diary
  editDiary: values => dispatch(DiaryActions.editItemRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

CreateEditDiaryModalContainer.propTypes = {
  action: string.isRequired,
  createDiary: func.isRequired,
  editDiary: func.isRequired,
}

export default compose(withConnect)(CreateEditDiaryModalContainer)
