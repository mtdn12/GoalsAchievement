import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Register Actions
  registerRequest: ['values', 'firebase'],
  registerSuccess: null,
  registerFailure: null,
  // Login Actions
  loginRequest: ['values'],
  loginSuccess: null,
  loginFailure: null,
  // Social Login
  socialLoginRequest: ['provider'],
  socialLoginSuccess: null,
  socialLoginFailure: null,
  // set and clear user
  setUser: ['user'],
  clearUser: null,
})

export const AuthTypes = Types
export const AuthActions = Creators
