import React from 'react'
import moment from 'moment'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const DiaryItem = ({ item }) => {
  return (
    <Button color="blue" as={Link} to={`diary/${item.get('_id')}`}>
      {moment(item.get('createdAt')).format('DD-MM-YYYY')}
    </Button>
  )
}

export default DiaryItem
