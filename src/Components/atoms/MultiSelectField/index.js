import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'
import { string, any, func, array, bool } from 'prop-types'
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

MultiSelect.propTypes = {
  name: string,
  value: any,
  handleChange: func,
  handleBlur: func,
  error: bool,
  label: string,
  message: string,
  options: array,
}

export default MultiSelect
