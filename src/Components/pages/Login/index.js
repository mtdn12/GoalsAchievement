import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { object, func, bool } from 'prop-types'
import GridOn from '@material-ui/icons/GridOn'

import Typography from '@material-ui/core/Typography'
import GoogleLogin from 'react-google-login'
import NonAuthTemplate from '../../templates/NonAuthTemplate'
import LogoBox from '../../molecules/LogoBox'

import kv from './assets/kv.png'
import bg from './assets/bg.jpg'

const Login = ({ classes, responseFromGoogle, authenticationIsLoading }) => {
  return (
    <NonAuthTemplate>
      <div className={classes.wrapper}>
        <div className={classes.kv}>
          <img className={classes.kvImg} alt="Template Pro" src={kv} />
        </div>
        <div className={classes.formLogin}>
          <div className={classes.form}>
            <LogoBox />
            <div className={classes.loginWrapper}>
              <GoogleLogin
                disabled={authenticationIsLoading}
                clientId="1071869311754-qpnjkeobg7h75i09nj4q7m9ohdkia29l.apps.googleusercontent.com"
                onSuccess={responseFromGoogle}
                onFailure={responseFromGoogle}>
                <span> Login with Google</span>
              </GoogleLogin>
            </div>

            <Typography style={{ color: '#fff' }} align="center">
              Need support ? Contact us:{' '}
              <a
                style={{ color: '#fff' }}
                href="mailto:technical@dsquare.com.vn">
                technical@dsquare.com.vn
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </NonAuthTemplate>
  )
}

Login.propTypes = {
  classes: object.isRequired,
  responseFromGoogle: func.isRequired,
  authenticationIsLoading: bool.isRequired,
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
  form: {},
  formLogin: {
    width: '50%',
    backgroundColor: '#4A90E2',
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: '10%',
    justifyContent: 'center',
    position: 'relative',
    zIndex: '0',
  },
  kv: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '10%',
    justifyContent: 'center',
    backgroundImage: `url("${bg}")`,
  },
  kvImg: {
    position: 'relative',
    zIndex: '1',
    width: '70%',
  },
  kvbg: {
    position: 'relative',
    zIndex: '0',
  },
  loginWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  btnHover: {
    cursor: 'pointer',
    background: 'rgb(209, 72, 54)',
    color: 'rgb(255, 255, 255)',
    width: 190,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default withStyles(styles)(Login)
