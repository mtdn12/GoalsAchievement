import React from 'react'
import InputField from '../../atoms/InputField'
import { object, func, bool } from 'prop-types'
import styles from './styles.module.scss'
import { Button } from 'semantic-ui-react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const InputTodo = ({ item, handleAction, isLoadingAction, cancelEdit }) => {
  return (
    <Formik
      initialValues={item}
      onSubmit={(values, fn) => {
        handleAction(values, fn.resetForm)
      }}
      validationSchema={Yup.object().shape({
        todo: Yup.string()
          .trim()
          .required('Please add todo'),
      })}
      enableReinitialize
      render={({
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        handleSubmit,
        setFieldValue,
      }) => (
        <div className={styles.controlInput}>
          <div className={styles.input}>
            <InputField
              name="todo"
              value={values.todo}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={touched.todo && Boolean(errors.todo)}
              message={errors.todo}
              inputProps={{
                fluid: true,
                placeholder: 'Add your task',
              }}
            />
          </div>
          {item.id ? (
            <React.Fragment>
              <Button
                icon="check"
                primary
                type="submit"
                onClick={handleSubmit}
                disabled={isLoadingAction}
                loading={isLoadingAction}
              />
              <Button
                icon="cancel"
                negative
                type="button"
                onClick={cancelEdit}
                disabled={isLoadingAction}
                loading={isLoadingAction}
              />
            </React.Fragment>
          ) : (
            <Button
              icon="add"
              primary
              type="submit"
              onClick={handleSubmit}
              disabled={isLoadingAction}
              loading={isLoadingAction}
            />
          )}
        </div>
      )}
    />
  )
}

InputTodo.propTypes = {
  item: object.isRequired,
  handleAction: func.isRequired,
  isLoadingAction: bool.isRequired,
  cancelEdit: func.isRequired,
}

export default InputTodo
