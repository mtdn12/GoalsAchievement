export const getAuthenticated = state => {
  let auth = state.firebase.auth
  return auth.isLoaded && !auth.isEmpty
}

export const getProfile = state => state.firebase.profile
