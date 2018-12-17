import React from 'react'
import { Dropdown, Form, Label } from 'semantic-ui-react'
import styles from './styles.module.scss'
const MultiSelect = ({
  name,
  value,
  handleChange,
  handleBlur,
  error,
  label,
  message,
  // inputProps,
  options,
}) => {
  return (
    <React.Fragment>
      <Dropdown
        name={name}
        value={value}
        labeled={label}
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
        fluid
        multiple
      />
      {error && (
        <Label basic color="red" pointing className={styles.helperText}>
          {message}
        </Label>
      )}
    </React.Fragment>
  )
}

export default MultiSelect
