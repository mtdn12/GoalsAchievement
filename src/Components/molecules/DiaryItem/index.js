import React from 'react'
import moment from 'moment'
// import styles from './styles.module.scss'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const DiaryItem = ({ item }) => {
  return (
    <Button color="blue" as={Link} to={`diary/${item.get('_id')}`}>
      {moment(item.get('createdAt')).format('DD-MM-YYYY')}
    </Button>
  )
}

DiaryItem.propTypes = {
  item: object.isRequired,
}

export default DiaryItem
