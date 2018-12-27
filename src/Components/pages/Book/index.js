import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Header } from 'semantic-ui-react'
import styles from './styles.module.scss'
import Template from 'src/Containers/Template'
import SelectField from '../../atoms/SelectField'
import BookItem from 'src/Containers/BookItem'
import { statusOption } from '../../../Utils/options'
import { showTitle } from '../../../Utils/helper'

const Book = ({
  openModalCreateBook,
  books,
  isLoadingBooks,
  setFilter,
  filter,
}) => {
  return (
    <Template>
      <div id={styles.bookWrap}>
        {isLoadingBooks && <Loader active inline="centered" size="big" />}
        {!isLoadingBooks && (
          <div className={styles.headerWrap}>
            <Header textAlign="center" color="blue" as="h1">
              {showTitle(filter.get('status'))}
            </Header>
            <div className={styles.selectWrap}>
              <SelectField
                name="status"
                value={filter.get('status')}
                options={statusOption}
                handleChange={(e, { value }) => setFilter('status', value)}
                inputProps={{
                  fluid: true,
                }}
              />
            </div>
          </div>
        )}
        {!isLoadingBooks &&
          books && (
            <div className={styles.bookListWrap}>
              {books.size > 0 ? (
                <div>
                  {books.map(book => (
                    <BookItem key={book.get('_id')} item={book} />
                  ))}
                </div>
              ) : (
                <p>No books exist</p>
              )}
            </div>
          )}
        <div className={styles.btnWrap}>
          <Button
            icon="add"
            circular
            size="massive"
            primary
            onClick={openModalCreateBook}
          />
        </div>
      </div>
    </Template>
  )
}

Book.propTypes = {
  openModalCreateBook: func.isRequired,
  books: object.isRequired,
  isLoadingBooks: bool.isRequired,
  setFilter: func.isRequired,
  filter: object.isRequired,
}

export default Book
