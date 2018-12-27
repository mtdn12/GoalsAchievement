import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import { func, object, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import SelectField from '../../atoms/SelectField'
import TextareaField from '../../atoms/TextareaField'
import { rateOption } from '../../../Utils/options'
import styles from './styles.module.scss'

const AddEditReview = ({
  handleClose,
  isLoadingAction,
  item,
  handleAction,
  action,
}) => {
  return (
    <Modal size="small" open onClose={handleClose} id={styles.modalWrap}>
      <Modal.Header className={styles.headerWrap}>
        {action === 'create' ? 'Add Review' : 'Change Review'}
      </Modal.Header>
      <Formik
        initialValues={item}
        onSubmit={values => handleAction(values)}
        validationSchema={Yup.object().shape({
          rate: Yup.number().required('This field is required'),
          review: Yup.string().required('This field is required'),
        })}
        render={({
          handleChange,
          values,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <Form onSubmit={handleSubmit} className={styles.formContent}>
              <Modal.Content>
                <SelectField
                  name="rate"
                  value={values.rate}
                  options={rateOption}
                  handleChange={(e, { value }) => setFieldValue('rate', value)}
                  handleBlur={e => setFieldTouched('rate', true, true)}
                  inputProps={{
                    fluid: true,
                  }}
                  label="Rate"
                  error={touched.rate && Boolean(errors.rate)}
                  message={errors.rate}
                />
                <TextareaField
                  name="review"
                  value={values.review}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Review"
                  placeholder="Please write your review"
                  error={touched.review && Boolean(errors.review)}
                  message={errors.review}
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
                  {action === 'create' ? 'Add' : 'Save'}
                </Button>
              </Modal.Actions>
            </Form>
          )
        }}
      />
    </Modal>
  )
}

AddEditReview.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  action: string.isRequired,
}

export default AddEditReview
