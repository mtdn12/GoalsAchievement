import React from 'react'
import { object, string, any, func, array, bool } from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import classNames from 'classnames'
const styles = theme => ({ filterField: {} })

const SelectBoxFilter = ({
  classes,
  label,
  id,
  value,
  className,
  onChange,
  options,
  fullWidth,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      id={id}
      select
      className={classNames(classes.filterField, className)}
      value={value}
      onChange={onChange(id)}
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
      }}
      margin="normal">
      {options.map(option => (
        <MenuItem
          key={`${id}-${option.get('value')}`}
          value={option.get('value')}>
          {option.get('label')}
        </MenuItem>
      ))}
    </TextField>
  )
}

SelectBoxFilter.propTypes = {
  classes: object.isRequired,
  label: string,
  id: string,
  value: any,
  className: string,
  onChange: func.isRequired,
  options: ImmutablePropTypes.list.isRequired,
  fullWidth: bool,
}

export default withStyles(styles)(SelectBoxFilter)
