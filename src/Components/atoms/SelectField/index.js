import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import { string, any, func, array, bool, object } from 'prop-types'
import styles from './styles.module.scss'

const SelectField = React.memo(
  ({
    name,
    value,
    handleChange,
    handleBlur,
    error,
    label,
    message,
    inputProps,
    options,
  }) => {
    return (
      <Form.Field>
        <Form.Select
          name={name}
          value={value}
          options={options}
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

SelectField.propTypes = {
  name: string,
  value: any,
  handleChange: func,
  handleBlur: func,
  error: bool,
  label: string,
  message: string,
  inputProps: object,
  options: array,
}

export default SelectField
