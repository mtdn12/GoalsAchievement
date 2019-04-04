import React from 'react'

import { Header, Button } from 'semantic-ui-react'

import NonAuthTemplate from '../../templates/NonAuthTemplate'

const NotFound = () => {
  return (
    <NonAuthTemplate>
      <Header as="h2">Not Found</Header>
      <Button as="a" href="/" primary>
        Go back to homepage
      </Button>
    </NonAuthTemplate>
  )
}
NotFound.propTypes = {}
export default NotFound
