import { ADD_USER, DELETE_USER } from './action'

import { ILoggedUserData } from '@/types'

const initialState: ILoggedUserData = {
  id: 0,
  isAdmin: false,
  userName: '',
  email: '',
  position: '',
  institution: '',
  password: ''
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default usersReducer
