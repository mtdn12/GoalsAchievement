import React from 'react'
import { object, bool, func, array } from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import withStyles from '@material-ui/core/styles/withStyles'
import Search from '@material-ui/icons/Search'
import AddCircle from '@material-ui/icons/AddCircle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import AuthTemplate from '../../templates/AuthTemplate'
import ResponseTemplateItem from '../../organisms/ResponseTemplateItem'
import SelectBoxFilter from '../../molecules/SelectBoxFilter'
import ConfirmationDialog from '../../molecules/ConfirmationDialog'
import ResponseUpdateTemplateDialog from '../../../containers/ResponseUpdateTemplateDialog'

class ResponseTemplate extends React.Component {
  state = { search: '' }

  componentDidMount() {
    this.props.doGetListReponsesTemplate(0)
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const {
      classes,
      filter,
      items,
      socialSources,
      topics,
      categories,
      subCategories,
      doUpdateFilter,
      doUpdateKeyword,
      doUpdateData,
      doEditItem,
      doShowHideModal,
      doDeleteItem,
      doShowHideModalConfirm,
      doSearch,
      itemEdit,
      isShowModal,
      isShowModalConfirm,
      isDeleting,
      ...props
    } = this.props
    return (
      <AuthTemplate {...props}>
        <Grid container spacing={16} className={classes.root}>
          <Grid item xs={12}>
            <form noValidate autoComplete="off">
              <TextField
                id="search"
                label="Search"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('search')}
                margin="normal"
              />

              {socialSources.size > 0 && (
                <SelectBoxFilter
                  label="Social Sources"
                  id="socialSourceId"
                  className={classes.filterField}
                  value={filter.get('socialSourceId') || ''}
                  onChange={doUpdateFilter}
                  options={socialSources}
                />
              )}
              {topics.size > 1 && (
                <SelectBoxFilter
                  label="Topic"
                  id="topicId"
                  className={classes.filterField}
                  value={filter.get('topicId') || ''}
                  onChange={doUpdateFilter}
                  options={topics}
                />
              )}
              {categories.size > 1 && (
                <SelectBoxFilter
                  label="Category"
                  id="categoryId"
                  className={classes.filterField}
                  value={filter.get('categoryId') || ''}
                  onChange={doUpdateFilter}
                  options={categories}
                />
              )}
              {subCategories.size > 1 && (
                <SelectBoxFilter
                  label="Sub Category"
                  id="subCategoryId"
                  className={classes.filterField}
                  value={filter.get('subCategoryId') || ''}
                  onChange={doUpdateFilter}
                  options={subCategories}
                />
              )}
              <Button
                mini
                variant="fab"
                color="primary"
                aria-label="Search"
                className={classes.button}>
                <Search className={classes.searchIcon} />
              </Button>
              <Button
                mini
                variant="fab"
                color="primary"
                aria-label="Add"
                className={classes.button}
                onClick={doShowHideModal(true)}>
                <AddCircle className={classes.addIcon} />
              </Button>
            </form>
          </Grid>

          {items.length === 0 && (
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography component="p">No templates</Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {items.map(item => (
            <Grid item xs={4} key={`respon-${item.get('templateId')}`}>
              <ResponseTemplateItem
                doUpdateData={doUpdateData}
                doEditItem={doEditItem}
                doShowHideModalConfirm={doShowHideModalConfirm}
                item={item}
              />
            </Grid>
          ))}
        </Grid>

        <ResponseUpdateTemplateDialog
          open={isShowModal}
          onClose={doShowHideModal(false)}
          item={itemEdit}
        />
        <ConfirmationDialog
          open={isShowModalConfirm}
          loading={isDeleting}
          onClose={doShowHideModalConfirm(false)}
          onConfirm={doDeleteItem}
          title="Confirm"
          content="Do you want delete?"
        />
      </AuthTemplate>
    )
  }
}
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  filterField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  searchIcon: {
    width: '17px',
    zIndex: '4',
  },
  searchInput: {
    paddingTop: '2px',
  },
  addIcon: {
    marginTop: -2,
  },
})

ResponseTemplate.propTypes = {
  classes: object.isRequired,
  filter: ImmutablePropTypes.map.isRequired,
  doEditItem: func.isRequired,
  doShowHideModal: func.isRequired,
  doUpdateData: func.isRequired,
  isShowModal: bool,
  isShowModalConfirm: bool,
  isDeleting: bool,
  doUpdateFilter: func.isRequired,
  doUpdateKeyword: func.isRequired,
  doGetListReponsesTemplate: func.isRequired,
  doSearch: func.isRequired,
  doShowHideModalConfirm: func.isRequired,
  doDeleteItem: func.isRequired,
  socialSources: ImmutablePropTypes.list,
  topics: ImmutablePropTypes.list,
  categories: ImmutablePropTypes.list,
  subCategories: ImmutablePropTypes.list,
  items: ImmutablePropTypes.list,
  itemEdit: ImmutablePropTypes.map,
}
export default withStyles(styles)(ResponseTemplate)
