import React from 'react'

import { Form, Label } from 'semantic-ui-react'

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
        <Label basic color="red" pointing>
          {message}
        </Label>
      )}
    </Form.Field>
  )
}

export default TextareaField
