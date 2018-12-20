import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import { func, object, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import InputField from '../../atoms/InputField'
import styles from './styles.module.scss'

const CreateEditAction = ({
  handleClose,
  isLoadingAction,
  item,
  handleAction,
  action,
}) => {
  return (
    <Modal size="small" open onClose={handleClose} id={styles.modalWrap}>
      <Modal.Header className={styles.headerWrap}>
        {action === 'create' ? 'Create Action' : 'Edit Action'}
      </Modal.Header>
      <Formik
        initialValues={item}
        onSubmit={values => handleAction(values)}
        validationSchema={Yup.object().shape({
          action: Yup.string().required('This field is required'),
          taticId: Yup.string().required(),
        })}
        render={({
          handleChange,
          values,
          handleSubmit,
          handleBlur,
          errors,
          touched,
        }) => {
          return (
            <Form onSubmit={handleSubmit} className={styles.formContent}>
              <Modal.Content>
                <InputField
                  name="taticId"
                  value={values.taticId}
                  inputProps={{
                    fluid: true,
                    disabled: true,
                  }}
                  label="Tatic ID"
                />
                <InputField
                  name="action"
                  value={values.action}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  inputProps={{
                    fluid: true,
                  }}
                  label="Action"
                  error={touched.action && Boolean(errors.action)}
                  message={errors.action}
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

CreateEditAction.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  action: string.isRequired,
}

export default CreateEditAction
