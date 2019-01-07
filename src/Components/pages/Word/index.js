import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Header } from 'semantic-ui-react'
import styles from './styles.module.scss'
import Template from 'src/Containers/Template'
import SelectField from '../../atoms/SelectField'
import WordItem from 'src/Containers/WordItem'
import { wordOption } from '../../../Utils/options'

const Book = ({
  openModalCreateWord,
  words,
  isLoadingWords,
  setFilter,
  filter,
}) => {
  return (
    <Template>
      <div id={styles.wordWrap}>
        {isLoadingWords && <Loader active inline="centered" size="big" />}
        {!isLoadingWords && (
          <div className={styles.headerWrap}>
            <Header textAlign="center" color="blue" as="h1">
              {filter.get('isRecall') ? 'Recall Words' : 'All Word'}
            </Header>
            <div className={styles.selectWrap}>
              <SelectField
                name="isRecall"
                value={filter.get('isRecall')}
                options={wordOption}
                handleChange={(e, { value }) => setFilter('isRecall', value)}
                inputProps={{
                  fluid: true,
                }}
              />
            </div>
          </div>
        )}
        {!isLoadingWords &&
          words && (
            <div className={styles.bookListWrap}>
              {words.size > 0 ? (
                <div>
                  {words.map(book => (
                    <WordItem key={book.get('_id')} item={book} />
                  ))}
                </div>
              ) : (
                <p>No word exist</p>
              )}
            </div>
          )}
        <div className={styles.btnWrap}>
          <Button
            icon="add"
            circular
            size="massive"
            primary
            onClick={openModalCreateWord}
          />
        </div>
      </div>
    </Template>
  )
}

Book.propTypes = {
  openModalCreateWord: func.isRequired,
  words: object.isRequired,
  isLoadingWords: bool.isRequired,
  setFilter: func.isRequired,
  filter: object.isRequired,
}

export default Book
