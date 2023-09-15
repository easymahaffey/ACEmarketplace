const Item = require("../db/models/Item")
const User = require("../db/models/User")

module.exports = {
    addItem: function (req, res) {
        let { userId, itemName, itemCategory, itemPicture, itemSku, itemCartQuantity, itemWarehouseQuantity, itemCost, itemListPrice   } = req.body 
        let item = {}
        item.userId = userId
        if (itemName !== '') {
            item.itemName = itemName
        }
        if (itemCategory !== '') {
            item.itemCategory = itemCategory
        }
        if (itemPicture !== '') {
            item.itemPicture = itemPicture
        }
        if (itemSku !== '') {
            item.itemSku = itemSku
        }
        if (itemCartQuantity !== '') {
            item.itemCartQuantity = itemCartQuantity
        }
        if (itemWarehouseQuantity !== '') {
            item.itemWarehouseQuantity = itemWarehouseQuantity
        }
        if (itemCost !== '') {
            item.itemCost = itemCost
        }
        if (itemListPrice !== '') {
            item.itemListPrice = itemListPrice
        }
        let newItem = new Item(item)
        newItem.save((err, data) => {
            if (err) {
                console.log(err)
            } else {
                User.findByIdAndUpdate({ _id: data.userId }, { $push: { items: data._id } }, { new: true }).populate({path:'items', options:{sort:{'itemName':1}}}).exec((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json(data.items)
                    }
                })
            }
        })
    },
    deleteItem: function (req, res) {
        let { _id } = req.body
        Item.findByIdAndDelete({ _id }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                User.findByIdAndUpdate({ _id: data.userId }, { $pull: { items: data._id } }, { new: true }).populate({path:'items', options:{sort:{'itemName':1}}}).exec((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json(data.items)
                    }
                })
            }
        })
    },
    editItem: async function (req, res) {
        let { _id, userId, itemName, itemCategory, itemPicture, itemSku, itemCartQuantity, itemWarehouseQuantity, itemCost, itemListPrice } = req.body
        const mirror = await Item.findById({ _id })
        let updated = {}
        updated._id = _id
        updated.userId = userId
        if (itemName !== mirror.itemName) {
            updated.itemName = itemName
        } else {
            updated.itemName = mirror.itemName
        }
        if (itemCategory !== mirror.itemCategory) {
            updated.itemCategory = itemCategory
        } else {
            updated.itemCategory = mirror.itemCategory
        }
        if (itemPicture !== mirror.itemPicture) {
            updated.itemPicture = itemPicture
        } else {
            updated.itemPicture = mirror.itemPicture
        }
        if (itemSku !== mirror.itemSku) {
            updated.itemSku = itemSku
        } else {
            updated.itemSku = mirror.itemSku
        }
        if (itemCartQuantity !== mirror.itemCartQuantity) {
            updated.itemCartQuantity = itemCartQuantity
        } else {
            updated.itemCartQuantity = mirror.itemCartQuantity
        }
        if (itemWarehouseQuantity !== mirror.itemWarehouseQuantity) {
            updated.itemWarehouseQuantity = itemWarehouseQuantity
        } else {
            updated.itemWarehouseQuantity = mirror.itemWarehouseQuantity
        }
        if (itemCost !== mirror.itemCost) {
            updated.itemCost = itemCost
        } else {
            updated.itemCost = mirror.itemCost
        }
        if (itemListPrice !== mirror.itemListPrice) {
            updated.itemListPrice = itemListPrice
        } else {
            updated.itemListPrice = mirror.itemListPrice
        }
        updated = Object.entries(updated).reduce((a,[key,value]) => (value ? (a[key]=value, a) : a), {})
        Item.findByIdAndUpdate({ _id }, { $set: updated }, { new: true }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                User.findById({ _id: data.userId }).populate({path:'items', options:{sort:{'itemName':1}}}).exec((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json(data.items)
                    }
                })
            }
        })
    },
    getItems: function(req, res){
        let { _id } = req.body
        User.findById({_id}).populate({path:'items', options:{sort:{'itemName':1}}}).exec((err, data)=>{
            if(err){
                console.log(err)
            } else {
                res.json(data.items)
            }
        })
    },
    deleteUser: function(req, res){
        let { _id } = req.body
        User.findByIdAndDelete({ _id }, (err, data)=>{
            if(err){
                console.log(err)
            } else {
                Item.deleteMany({ userId: data._id}, (err, data)=>{
                    if(err){
                        console.log(err)
                    } else {
                        res.json({ message: "User and user items deleted" })
                    }
                })
            }
        })
    }
}