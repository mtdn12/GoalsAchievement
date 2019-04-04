import { combineReducers } from 'redux' //
import * as book from '../Book/InitialState'
import * as word from '../Word/InitialState'
import * as todo from '../Todo/InitialState'
import * as modal from '../Modal/InitialState'
import * as diary from '../Diary/InitialState'

export const initialState = {
  [book.MODULE_NAME]: book.INITIAL_STATE,
  [word.MODULE_NAME]: word.INITIAL_STATE,
  [todo.MODULE_NAME]: todo.INITIAL_STATE,
  [modal.MODULE_NAME]: modal.INITIAL_STATE,
  [diary.MODULE_NAME]: diary.INITIAL_STATE,
}
export const combine = reducers => {
  const reducerNames = Object.keys(reducers)
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state
    }
  })
  return combineReducers(reducers)
}
