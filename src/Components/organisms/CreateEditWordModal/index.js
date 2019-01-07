import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import { func, object, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import InputField from '../../atoms/InputField'
import TextareaField from '../../atoms/TextareaField'
import styles from './styles.module.scss'

const CreateEditWord = ({
  handleClose,
  isLoadingAction,
  item,
  handleAction,
  action,
  handleAddImage,
}) => {
  return (
    <Modal size="small" open onClose={handleClose} id={styles.modalWrap}>
      <Modal.Header className={styles.headerWrap}>
        {action === 'create' ? 'Create Word' : 'Edit Word'}
      </Modal.Header>
      <Formik
        initialValues={item}
        onSubmit={values => handleAction(values)}
        validationSchema={Yup.object().shape({
          word: Yup.string().required(),
          description: Yup.string().required(),
          linkMap: Yup.string().required(),
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
                  name="word"
                  value={values.word}
                  inputProps={{
                    fluid: true,
                  }}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Word"
                  error={touched.word && Boolean(errors.word)}
                  message={errors.word}
                />
                <TextareaField
                  name="description"
                  value={values.description}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  label="Description"
                  placeholder="Please write your description"
                  error={touched.description && Boolean(errors.description)}
                  message={errors.description}
                />
                <div className={styles.controlAddFile}>
                  <div className={styles.showLink}>
                    <InputField
                      name="linkMap"
                      value={values.linkMap}
                      inputProps={{
                        fluid: true,
                        disabled: true,
                      }}
                      label="Link Map"
                      error={touched.linkMap && Boolean(errors.linkMap)}
                      message={errors.linkMap}
                    />
                  </div>
                  <Button
                    primary
                    onClick={handleAddImage}
                    type="button"
                    disabled={isLoadingAction}>
                    Add Map
                  </Button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  id="addImage"
                  onChange={e => {
                    if (e.target.files[0]) {
                      setFieldValue('linkMap', e.target.files[0].name)
                      setFieldValue('image', e.target.files[0])
                    }
                  }}
                  style={{ display: 'none' }}
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

CreateEditWord.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  action: string.isRequired,
  handleAddImage: func.isRequired,
}

export default CreateEditWord
