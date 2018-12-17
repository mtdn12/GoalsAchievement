import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import { func, object, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import InputField from '../../atoms/InputField'
import TextareaField from '../../atoms/TextareaField'
import styles from './styles.module.scss'

const CreateEditStrategy = ({
  handleClose,
  isLoadingAction,
  item,
  handleAction,
  action,
}) => {
  // console.log(handleAction)
  return (
    <Modal size="small" open onClose={handleClose} id={styles.modalWrap}>
      <Modal.Header className={styles.headerWrap}>
        {action === 'create' ? 'Create Strategy' : 'Edit Strategy'}
      </Modal.Header>
      <Formik
        initialValues={item}
        onSubmit={values => handleAction(values)}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('This field is required'),
          goalId: Yup.string().required(),
          objectiveId: Yup.string().required(),
          timeEnd: Yup.date()
            .min(
              moment().format('MM-DD-YYYY'),
              'Your time end must higher than today'
            )
            .required('This field is required'),
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
                  name="goalId"
                  value={values.goalId}
                  inputProps={{
                    fluid: true,
                    disabled: true,
                  }}
                  label="Goal ID"
                />
                <InputField
                  name="objectiveId"
                  value={values.objectiveId}
                  inputProps={{
                    fluid: true,
                    disabled: true,
                  }}
                  label="Objective ID"
                />
                <InputField
                  name="name"
                  value={values.name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  inputProps={{
                    fluid: true,
                  }}
                  label="Name"
                  error={touched.name && Boolean(errors.name)}
                  message={errors.name}
                />
                <InputField
                  name="timeEnd"
                  value={values.timeEnd}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  inputProps={{
                    fluid: true,
                    type: 'date',
                  }}
                  label="Time End"
                  error={touched.timeEnd && Boolean(errors.timeEnd)}
                  message={errors.timeEnd}
                />
                <TextareaField
                  name="description"
                  value={values.description}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Description"
                  placeholder="Description"
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

CreateEditStrategy.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  action: string.isRequired,
}

export default CreateEditStrategy
