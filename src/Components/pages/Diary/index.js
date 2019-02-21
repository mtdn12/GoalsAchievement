import React from 'react'
import { func, object } from 'prop-types'
import { Button } from 'semantic-ui-react'
import Template from 'src/Containers/Template'
import LazyLoad from 'react-lazyload'
import DiaryItem from '../../molecules/DiaryItem'
import styles from './styles.module.scss'

const Diary = ({ items, openModalCreateDiary, isLoadingItems }) => {
  console.log(items.toJS())
  return (
    <Template>
      <div id={styles.diaryWrap}>
        {items.map(item => (
          <LazyLoad key={item.get('_id')} height={100} offset={100}>
            <DiaryItem item={item} />
          </LazyLoad>
        ))}
        <div className={styles.btnWrap}>
          <Button
            icon="add"
            circular
            size="massive"
            primary
            onClick={openModalCreateDiary}
          />
        </div>
      </div>
    </Template>
  )
}

Diary.propTypes = {
  items: object.isRequired,
  openModalCreateDiary: func.isRequired,
}

export default Diary
