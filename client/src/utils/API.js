import axios from 'axios'
import store from "../redux/store.js"
import { logout, getUser, sendMessage } from "../redux/actions/authActions"
import { getItems } from "../redux/actions/appActions"

const BASE_URL = process.env.REACT_APP_BASE_URL

const API = {
  login: (user) => {
    axios.post(BASE_URL + "/auth/login", user)
      .then(res => {
        res.data.message ?
          store.dispatch(sendMessage(res.data.message)) :
          store.dispatch(getUser(res.data))
      })
  },
  register: (user) => {
    axios.post(BASE_URL + "/auth/register", user)
      .then(res => {
        res.data.message ?
          store.dispatch(sendMessage(res.data.message)) :
          store.dispatch(getUser(res.data))
      })
  },
  update: (updatedUser) => {
    axios.post(BASE_URL + "/auth/update", updatedUser).then(res => store.dispatch(getUser(res.data)))
  },
  deleteUser: (_id) => {
    axios.post(BASE_URL + "/auth/deleteuser", { _id }).then(res => store.dispatch(logout()))
  },
  logout: () => {
    axios.post(BASE_URL + "/auth/logout").then(res => store.dispatch(logout()))
  },
  addItem: (contact) => {
    axios.post(BASE_URL + "/items/add", contact).then(res => store.dispatch(getItems(res.data)))
  },
  deleteItem: (_id) => {
    axios.post(BASE_URL + "/items/delete", { _id }).then(res => store.dispatch(getItems(res.data)))
  },
  editItem: (updatedContact) => {
    axios.post(BASE_URL + "/items/update", updatedContact).then(res => store.dispatch(getItems(res.data)))
  },
  bringInItems: (_id) => {
    axios.post(BASE_URL + "/items", { _id }).then(res => store.dispatch(getItems(res.data)))
  }
}

export default API