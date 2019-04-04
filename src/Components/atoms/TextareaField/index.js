import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import { string, any, func, bool, object } from 'prop-types'
import styles from './styles.module.scss'
const TextareaField = ({
  label,
  placeholder,
  handleChange,
  handleBlur,
  value,
  inputProps,
  error,
  message,
  name,
}) => {
  return (
    <Form.Field>
      <Form.TextArea
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        label={label}
        placeholder={placeholder}
        {...inputProps}
        error={error}
      />
      {error && (
        <Label basic color="red" pointing className={styles.helperText}>
          {message}
        </Label>
      )}
    </Form.Field>
  )
}

TextareaField.propTypes = {
  label: string,
  placeholder: string,
  handleChange: func,
  handleBlur: func,
  value: any,
  inputProps: object,
  error: bool,
  message: string,
  name: string,
}

export default TextareaField
