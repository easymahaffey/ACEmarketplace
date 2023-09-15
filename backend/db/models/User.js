let  mongoose = '../../../server/node_modules/mongoose'
mongoose = require(mongoose)

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    loggedIn: {
        type: String,
    },
    items: {
        type: [ mongoose.Schema.Types.ObjectId ],
        ref: 'Item'
    }
})

module.exports = mongoose.model("User", UserSchema)