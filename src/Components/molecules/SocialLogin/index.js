import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { func } from 'prop-types'
import styles from './styles.module.scss'

const SocialLogin = ({ handleSocialLogin }) => {
  return (
    <div id={styles.socialWrap}>
      <Button
        fluid
        type="button"
        color="facebook"
        onClick={() => handleSocialLogin('facebook')}>
        <Icon name="facebook" /> Login with facebook
      </Button>
      <Button
        fluid
        type="button"
        color="google plus"
        onClick={() => handleSocialLogin('google')}>
        <Icon name="google plus" /> Login with Google
      </Button>
    </div>
  )
}
SocialLogin.propTypes = {
  handleSocialLogin: func.isRequired,
}

export default SocialLogin
