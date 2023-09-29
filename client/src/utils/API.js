import axios from "axios";
import store from "../redux/store.js";
import { logout, getUser, sendMessage } from "../redux/actions/authActions";
import { getItems, getItem, uploadPhoto } from "../redux/actions/appActions";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const API = {
  login: (user) => {
    axios.post(BASE_URL + "/auth/login", user).then((res) => {
      res.data.message
        ? store.dispatch(sendMessage(res.data.message))
        : store.dispatch(getUser(res.data));
    });
  },
  register: (user) => {
    axios.post(BASE_URL + "/auth/register", user).then((res) => {
      res.data.message
        ? store.dispatch(sendMessage(res.data.message))
        : store.dispatch(getUser(res.data));
    });
  },
  update: (updatedUser) => {
    axios
      .post(BASE_URL + "/auth/update", updatedUser)
      .then((res) => store.dispatch(getUser(res.data)));
  },
  deleteUser: (_id) => {
    axios
      .post(BASE_URL + "/auth/deleteuser", { _id })
      .then((res) => store.dispatch(logout()));
  },
  logout: () => {
    axios
      .post(BASE_URL + "/auth/logout")
      .then((res) => store.dispatch(logout()));
  },
  addItem: (item) => {
    axios
      .post(BASE_URL + "/items/add_item", item)
      .then((res) => store.dispatch(getItems(res.data)));
  },
  getItem: (item) => {
    axios
      .post(BASE_URL + "/items/get_item", item)
      .then((res) => store.dispatch(getItem(res.data)))
  },
  getAllItems: () => {
    axios
      .post(BASE_URL + "/items/get_all_items")
      .then((res) => store.dispatch(getItems(res.data)))
  },
  deleteItem: (_id) => {
    axios
      .post(BASE_URL + "/items/delete_item", { _id })
      .then((res) => store.dispatch(getItems(res.data)));
  },
  editItem: (updatedItem) => {
    axios
      .post(BASE_URL + "/items/update", updatedItem)
      .then((res) => store.dispatch(getItems(res.data)));
  },

  uploadPhoto: (item) => {
    axios
      .post(
        `${BASE_URL}/items/upload_photo`,
        console.log("API UPLOAD PHOTO ", item)
      )
      // axios.post(`${BASE_URL}/items/upload_photo`, item)
      .then((res) => store.dispatch(uploadPhoto(res.data)));
    // .then(res =>
    //   res.data.message ?
    //     store.dispatch(sendMessage(res.data.message)) :
    //     store.dispatch(uploadPhoto(res.data)))
  },
  bringInItems: (_id) => {
    axios
      .post(BASE_URL + "/items", { _id })
      .then((res) => store.dispatch(getItems(res.data)));
  },
};

export default API;
