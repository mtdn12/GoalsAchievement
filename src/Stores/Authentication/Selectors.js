export const getAuthenticated = state => {
  let auth = state.firebase.auth
  return auth.isLoaded && !auth.isEmpty
}

export const getLoadedAuthen = state => state.firebase.auth.isLoaded

export const getProfile = state => state.firebase.profile

export const getAuth = state => state.firebase.auth

export const getToken = state => state.firebase.auth.stsTokenManager.accessToken
