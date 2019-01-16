import React from 'react'
import { object, func, bool, number } from 'prop-types'
import { Loader, Button, Table } from 'semantic-ui-react'
import styles from './styles.module.scss'
import moment from 'moment'
import ModalPageTemplate from '../../templates/ModalPageTemplate'
import Pagination from '../../molecules/Pagination'

const TodoHistory = ({
  histories,
  isLoadingHistories,
  handleGoBack,
  filter,
  totalPages,
  setFilter,
  showHistoryDetail,
}) => {
  return (
    <ModalPageTemplate title="Todo History" handleGoBack={handleGoBack}>
      {isLoadingHistories && <Loader active inline="centered" size="big" />}
      {!isLoadingHistories &&
        histories && (
          <div>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Percent</Table.HeaderCell>
                  <Table.HeaderCell>Detail</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {histories.size === 0 ? (
                  <Table.Row>
                    <Table.Cell>No infomation</Table.Cell>
                  </Table.Row>
                ) : (
                  histories.map(his => (
                    <Table.Row key={his.get('_id')}>
                      <Table.Cell>
                        {moment(his.get('date')).format('DD-MM-YYYY')}
                      </Table.Cell>
                      <Table.Cell>{his.get('percent') + ' %'}</Table.Cell>
                      <Table.Cell>
                        <Button
                          primary
                          onClick={showHistoryDetail(his.get('details'))}>
                          Detail
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))
                )}
              </Table.Body>
            </Table>
            <Pagination
              activePage={filter.get('page')}
              totalPages={totalPages}
              handleChangePage={(e, { activePage }) =>
                setFilter('page', activePage)
              }
              handleChangeLimit={(e, { value }) => setFilter('limit', value)}
              limit={filter.get('limit')}
              options={[
                { text: '10', value: 10 },
                { text: '25', value: 25 },
                { text: '50', value: 50 },
              ]}
            />
          </div>
        )}
    </ModalPageTemplate>
  )
}

TodoHistory.propTypes = {
  handleGoBack: func.isRequired,
  histories: object.isRequired,
  isLoadingHistories: bool.isRequired,
  filter: object.isRequired,
  totalPages: number.isRequired,
  setFilter: func.isRequired,
  showHistoryDetail: func.isRequired,
}

export default TodoHistory
