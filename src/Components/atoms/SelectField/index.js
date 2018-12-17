import React from 'react'
import { Form, Label } from 'semantic-ui-react'
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

export default SelectField
