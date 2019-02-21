import React, { useState } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import { func, object, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './styles.module.scss'
import RichTextEditor from 'react-rte'

const CreateEditDiary = ({
  handleClose,
  isLoadingAction,
  item,
  handleAction,
  action,
}) => {
  const [content, setContent] = useState(RichTextEditor.createEmptyValue())
  const changeContent = value => {
    setContent(value)
  }
  return (
    <Modal size="small" open onClose={handleClose} id={styles.modalWrap}>
      <Modal.Header className={styles.headerWrap}>
        {action === 'create' ? 'Create Diary' : 'Edit Diary'}
      </Modal.Header>
      <Formik
        initialValues={item}
        onSubmit={values => handleAction(values)}
        validationSchema={Yup.object().shape({
          content: Yup.string().required(),
        })}
        render={({ handleSubmit, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit} className={styles.formContent}>
              <Modal.Content>
                <RichTextEditor
                  className={styles.editor}
                  value={content}
                  onChange={value => {
                    changeContent(value)
                    setFieldValue('content', value.toString('html'))
                  }}
                />
              </Modal.Content>
              <Modal.Actions className={styles.actionsWrap}>
                <Button type="button" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  primary
                  disabled={isLoadingAction}
                  loading={isLoadingAction}>
                  {action === 'create' ? 'Create' : 'Save'}
                </Button>
              </Modal.Actions>
            </Form>
          )
        }}
      />
    </Modal>
  )
}

CreateEditDiary.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  action: string.isRequired,
}

export default CreateEditDiary
