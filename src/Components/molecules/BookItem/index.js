import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import { object, func } from 'prop-types'
import { statusOption } from '../../../Utils/options'
import styles from './styles.module.scss'

const BookItem = ({
  item,
  openModalEditBook,
  openModalDeleteBook,
  handleChangeStatus,
  seeBookDetail,
}) => {
  return (
    <div className={styles.itemWrap} onClick={seeBookDetail}>
      <p>{item.get('title')}</p>
      <p>{item.get('author')}</p>
      <div className={styles.actionWrap}>
        <Dropdown
          value={item.get('status')}
          options={statusOption}
          icon="arrow circle down"
          button
          labeled
          // floating
          className="icon"
          onChange={handleChangeStatus}
        />
        <Button icon="edit" primary circular onClick={openModalEditBook} />
        <Button icon="delete" negative circular onClick={openModalDeleteBook} />
      </div>
    </div>
  )
}

BookItem.propTypes = {
  item: object.isRequired,
  openModalEditBook: func.isRequired,
  openModalDeleteBook: func.isRequired,
  handleChangeStatus: func.isRequired,
  seeBookDetail: func.isRequired,
}

export default BookItem
