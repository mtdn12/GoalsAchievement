import React from 'react'
import { object, func, bool } from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Formik } from 'formik'

import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import SelectBoxFilter from '../SelectBoxFilter'

import Yup from 'yup'

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 25px 25px 25px',
  },
  info: {
    marginLeft: theme.spacing.unit * 2,
    width: '100%',
  },
  infoFull: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing.unit * 2,
    marginTop: 0,
  },
  formFull: {
    width: '100%',
  },
  textField: {
    marginRight: 10,
    width: '100%',
  },
  content: {
    whiteSpace: 'pre-wrap',
  },
  actionRight: {
    textAlign: 'right',
  },
  btnAction: {
    marginRight: 10,
  },
})

const ResponseUpdateTemplateDialog = ({
  classes,
  onClose,
  open,
  item,
  doUpdateData,
  filterEdit,
  socialSources,
  topics,
  categories,
  subCategories,
  doUpdateFilterEdit,
  isSaving,
  ...props
}) => {
  if (!item) return null
  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      fullWidth
      maxWidth="md"
      open={open}>
      <DialogTitle>Response Template</DialogTitle>
      <div className={classes.infoFull}>
        <Formik
          initialValues={item.toJS()}
          // validationSchema={Yup.object().shape({
          //   example: Yup.string().required('Example is required'),
          //   content: Yup.string().required('Content is required'),
          // })}
          onSubmit={(values, actions) => {
            doUpdateData(values)
            actions.setSubmitting(false)
          }}
          render={({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className={classes.formFull} onSubmit={handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    label="Title*"
                    id="example"
                    fullWidth
                    multiline
                    rowsMax="4"
                    value={values.example}
                    onChange={handleChange}
                    error={!!errors.example}
                    helperText={errors.example}
                    margin="normal"
                  />
                  <TextField
                    label="Content*"
                    id="content"
                    fullWidth
                    multiline
                    rowsMax="4"
                    value={values.content}
                    onChange={handleChange}
                    error={!!errors.content}
                    helperText={errors.content}
                    margin="normal"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        id="active"
                        checked={
                          !!(
                            values.active === 1 ||
                            values.active ||
                            !values.templateId
                          )
                        }
                        onChange={handleChange}
                        value="checked"
                        classes={{
                          checked: classes.switchChecked,
                          bar: classes.switchBarChecked,
                          icon: classes.switchIcon,
                          iconChecked: classes.switchIconChecked,
                        }}
                      />
                    }
                    classes={{
                      label: classes.label,
                    }}
                    label={!values.active ? 'De-Active' : 'Active'}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  {socialSources.size > 0 && (
                    <SelectBoxFilter
                      fullWidth
                      label="Social Sources"
                      id="socialSourceId"
                      className={classes.filterField}
                      value={filterEdit.get('socialSourceId') || ''}
                      onChange={doUpdateFilterEdit}
                      options={socialSources}
                    />
                  )}
                  {topics.size > 1 && (
                    <SelectBoxFilter
                      fullWidth
                      label="Topic"
                      id="topicId"
                      className={classes.filterField}
                      value={filterEdit.get('topicId') || ''}
                      onChange={doUpdateFilterEdit}
                      options={topics}
                    />
                  )}
                  {categories.size > 1 && (
                    <SelectBoxFilter
                      fullWidth
                      label="Category"
                      id="categoryId"
                      className={classes.filterField}
                      value={filterEdit.get('categoryId') || ''}
                      onChange={doUpdateFilterEdit}
                      options={categories}
                    />
                  )}
                  {subCategories.size > 1 && (
                    <SelectBoxFilter
                      fullWidth
                      label="Sub Category"
                      id="subCategoryId"
                      className={classes.filterField}
                      value={filterEdit.get('subCategoryId') || ''}
                      onChange={doUpdateFilterEdit}
                      options={subCategories}
                    />
                  )}
                </Grid>
              </Grid>
              <div className={classes.actionRight}>
                {isSaving && <CircularProgress size={25} />}
                <Button
                  color="secondary"
                  className={classes.btnAction}
                  onClick={onClose}>
                  Close
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSaving}
                  className={classes.btnAction}
                  type="submit">
                  Submit
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </Dialog>
  )
}

ResponseUpdateTemplateDialog.propTypes = {
  classes: object.isRequired,
  onClose: func.isRequired,
  open: bool.isRequired,
  item: ImmutablePropTypes.map,
  doUpdateData: func.isRequired,

  isSaving: bool,
  filterEdit: ImmutablePropTypes.map.isRequired,
  doUpdateFilterEdit: func.isRequired,
  socialSources: ImmutablePropTypes.list,
  topics: ImmutablePropTypes.list,
  categories: ImmutablePropTypes.list,
  subCategories: ImmutablePropTypes.list,
}

export default withStyles(styles)(ResponseUpdateTemplateDialog)
