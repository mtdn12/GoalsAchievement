import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import { string, any, func, bool, object } from 'prop-types'
import styles from './styles.module.scss'

const InputField = React.memo(
  ({
    name,
    value,
    handleChange,
    handleBlur,
    error,
    label,
    message,
    inputProps,
  }) => {
    return (
      <Form.Field>
        <Form.Input
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          label={label}
          error={error}
          {...inputProps}
        />
        {error && (
          <Label basic color="red" pointing className={styles.helperText}>
            {message}
          </Label>
        )}
      </Form.Field>
    )
  }
)

InputField.propTypes = {
  name: string,
  value: any,
  handleChange: func,
  handleBlur: func,
  error: bool,
  label: string,
  message: string,
  inputProps: object,
}

export default InputField
