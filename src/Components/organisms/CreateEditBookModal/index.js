import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import { func, object, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import InputField from '../../atoms/InputField'
import SelectField from '../../atoms/SelectField'
import TextareaField from '../../atoms/TextareaField'
import { rateOption, statusOption } from '../../../Utils/options'
import styles from './styles.module.scss'

const CreateEditBook = ({
  handleClose,
  isLoadingAction,
  item,
  handleAction,
  action,
}) => {
  return (
    <Modal size="small" open onClose={handleClose} id={styles.modalWrap}>
      <Modal.Header className={styles.headerWrap}>
        {action === 'create' ? 'Create Book' : 'Edit Book'}
      </Modal.Header>
      <Formik
        initialValues={item}
        onSubmit={values => handleAction(values)}
        validationSchema={Yup.object().shape({
          title: Yup.string().required(),
          author: Yup.string().required(),
          status: Yup.string().required(),
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
                <InputField
                  name="title"
                  value={values.title}
                  inputProps={{
                    fluid: true,
                  }}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Title"
                  error={touched.title && Boolean(errors.title)}
                  message={errors.title}
                />
                <InputField
                  name="author"
                  value={values.author}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  inputProps={{
                    fluid: true,
                  }}
                  label="Author"
                  error={touched.author && Boolean(errors.author)}
                  message={errors.author}
                />
                <SelectField
                  name="status"
                  value={values.status}
                  options={statusOption}
                  handleChange={(e, { value }) =>
                    setFieldValue('status', value)
                  }
                  handleBlur={e => setFieldTouched('status', true, true)}
                  inputProps={{
                    fluid: true,
                  }}
                  label="Status"
                  error={touched.status && Boolean(errors.status)}
                  message={errors.status}
                />
                {action === 'edit' && (
                  <React.Fragment>
                    <SelectField
                      name="rate"
                      value={values.rate}
                      options={rateOption}
                      handleChange={(e, { value }) =>
                        setFieldValue('rate', value)
                      }
                      handleBlur={e => setFieldTouched('rate', true, true)}
                      inputProps={{
                        fluid: true,
                      }}
                      label="Rate"
                    />
                    <TextareaField
                      name="review"
                      value={values.review}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      label="Review"
                      placeholder="Please write your review"
                    />
                  </React.Fragment>
                )}
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

CreateEditBook.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  action: string.isRequired,
}

export default CreateEditBook
