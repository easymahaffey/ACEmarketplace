import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_FORM, LOGOUT, WINDOW_RESIZE, SEND_MESSAGE, GET_USER } from '../types'

if (!JSON.parse(window.sessionStorage.getItem('state'))) {
  window.sessionStorage.setItem('state', JSON.stringify({ auth: { isAuth: false, test: false, user: {} } }))
}

const isAuth = JSON.parse(window.sessionStorage.getItem("state")).auth.isAuth
const user = JSON.parse(window.sessionStorage.getItem("state")).auth.user

const initialState = {
  isAuth,
  user,
  modalOpen: false,
  toggleForm: true,
  window: window.innerWidth,
  isHeader: true,
  message: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        toggleForm: true
      }
      case TOGGLE_FORM:
        return {
          ...state,
          toggleForm: !state.toggleForm
        }
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        modalOpen: false,
        toggleForm: true,
        isHeader: true,
        message: '',
        window: window.innerWidth,
      }
    case WINDOW_RESIZE:
      return {
        ...state,
        window: window.innerWidth
      }
    case SEND_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        modalOpen: false,
        toggleForm: true,
        isHeader: true,
        message: '',
      }
    default:
      return state;
  }
}

export default authReducer