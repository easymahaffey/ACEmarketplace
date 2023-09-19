const appFunctions = require("./appFunctions")
const authFunctions = require("./authFunctions")

module.exports = {
    register: authFunctions.registerAUser,
    login: authFunctions.loginAUser,
    updateUser: authFunctions.updateAUser,
    logout: authFunctions.logOutAUser,
    addItem: appFunctions.addItem,
    deleteItem: appFunctions.deleteItem,
    updateItem: appFunctions.editItem,
    getItems: appFunctions.getItems,
    uploadPhoto: appFunctions.uploadPhoto,
    deleteUser: appFunctions.deleteUser
}