const { log } = require("console");
const Item = require("../db/models/Item");
const User = require("../db/models/User");

module.exports = {
  addItem: function (req, res) {
    let {
      itemName,
      itemCategory,
      itemDescription,
      itemPicture,
      itemSku,
      itemCartQuantity,
      itemWarehouseQuantity,
      itemCost,
      itemPrice,
    } = req.body;
    let item = {};
    if (itemName !== "") {
      item.itemName = itemName;
    }
    if (itemCategory !== "") {
      item.itemCategory = itemCategory;
    }
    if (itemPicture !== "") {
      item.itemPicture = itemPicture;
    }
    if (itemSku !== "") {
      item.itemSku = itemSku;
    }
    if (itemCartQuantity !== "") {
      item.itemCartQuantity = itemCartQuantity;
    }
    if (itemWarehouseQuantity !== "") {
      item.itemWarehouseQuantity = itemWarehouseQuantity;
    }
    if (itemCost !== "") {
      item.itemCost = itemCost;
    }
    if (itemPrice !== "") {
      item.itemPrice = itemPrice;
    }
    if (itemDescription !== "") {
      item.itemDescription = itemDescription;
    }
    let newItem = new Item(item);
    Item.findOne({ itemName })
      .then((data) => {
        if (!data) {
          newItem
            .save()
            .then(() => {
              res.status(200).json({
                message: "Item added",
                itemName,
                itemCategory,
                itemPicture,
                itemSku,
                itemCartQuantity,
                itemWarehouseQuantity,
                itemCost,
                itemListPrice,
              });
            })
            .catch((saveErr) => {
              console.error("Error saving item:", saveErr);
              res.status(500).json({ message: "Error saving item" });
            });
        } else {
          res.json({ message: "Item already exists" });
        }
      })
      .catch((err) => console.log(err));
  },
  addCartItem: function (req, res) {
    let {
      userId,
      itemName,
      itemCategory,
      itemDescription,
      itemPicture,
      itemSku,
      itemCartQuantity,
      itemWarehouseQuantity,
      itemCost,
      itemPrice,
    } = req.body;
    let item = {};
    item.userId = userId;
    if (itemName !== "") {
      item.itemName = itemName;
    }
    if (itemCategory !== "") {
      item.itemCategory = itemCategory;
    }
    if (itemPicture !== "") {
      item.itemPicture = itemPicture;
    }
    if (itemSku !== "") {
      item.itemSku = itemSku;
    }
    if (itemCartQuantity !== "") {
      item.itemCartQuantity = itemCartQuantity;
    }
    if (itemWarehouseQuantity !== "") {
      item.itemWarehouseQuantity = itemWarehouseQuantity;
    }
    if (itemCost !== "") {
      item.itemCost = itemCost;
    }
    if (itemPrice !== "") {
      item.itemPrice = itemPrice;
    }
    if (itemDescription !== "") {
      item.itemDescription = itemDescription;
    }
    let newItem = item;
    newItem
      .save((err, data))
      .then((data) => {
        User.findByIdAndUpdate(
          { _id: data.userId },
          { $push: { items: data._id } },
          { new: true }
        )
          .populate({ path: "items", options: { sort: { itemName: 1 } } })
          .exec((err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.json(data.items);
            }
          });
      })
      .catch((err) => console.log(err));
  },
  deleteItem: async function (req, res) {
    let { itemName } = req.body._id;
    await Item.deleteOne({ itemName })
      .then(() => {
        res.json({ message: "Item deleted" });
      })
      .catch((err) => console.log(err));
  },
  deleteCartItem: function (req, res) {
    let { _id } = req.body;
    Item.findByIdAndDelete({ _id })
      .then((data) => {
        User.findByIdAndUpdate(
          { _id: data.userId },
          { $pull: { items: data._id } },
          { new: true }
        )
          .populate({ path: "items", options: { sort: { itemName: 1 } } })
          .exec((err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.json(data.items);
            }
          });
      })
      .catch((err) => console.log(err));
  },
  editItem: async function (req, res) {
    let {
      _id,
      userId,
      itemName,
      itemCategory,
      itemPicture,
      itemSku,
      itemCartQuantity,
      itemWarehouseQuantity,
      itemCost,
      itemListPrice,
    } = req.body;
    const mirror = await Item.findById({ _id });
    let updated = {};
    updated._id = _id;
    updated.userId = userId;
    if (itemName !== mirror.itemName) {
      updated.itemName = itemName;
    } else {
      updated.itemName = mirror.itemName;
    }
    if (itemCategory !== mirror.itemCategory) {
      updated.itemCategory = itemCategory;
    } else {
      updated.itemCategory = mirror.itemCategory;
    }
    if (itemPicture !== mirror.itemPicture) {
      updated.itemPicture = itemPicture;
    } else {
      updated.itemPicture = mirror.itemPicture;
    }
    if (itemSku !== mirror.itemSku) {
      updated.itemSku = itemSku;
    } else {
      updated.itemSku = mirror.itemSku;
    }
    if (itemCartQuantity !== mirror.itemCartQuantity) {
      updated.itemCartQuantity = itemCartQuantity;
    } else {
      updated.itemCartQuantity = mirror.itemCartQuantity;
    }
    if (itemWarehouseQuantity !== mirror.itemWarehouseQuantity) {
      updated.itemWarehouseQuantity = itemWarehouseQuantity;
    } else {
      updated.itemWarehouseQuantity = mirror.itemWarehouseQuantity;
    }
    if (itemCost !== mirror.itemCost) {
      updated.itemCost = itemCost;
    } else {
      updated.itemCost = mirror.itemCost;
    }
    if (itemListPrice !== mirror.itemListPrice) {
      updated.itemListPrice = itemListPrice;
    } else {
      updated.itemListPrice = mirror.itemListPrice;
    }
    updated = Object.entries(updated).reduce(
      (a, [key, value]) => (value ? ((a[key] = value), a) : a),
      {}
    );
    Item.findByIdAndUpdate(
      { _id },
      { $set: updated },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      }
    );
  },
  getItem: async function (req, res) {
      const { itemName, itemSku } = req.body; 
      let item = {};
      if (!itemName && !itemSku) {
        return res.json({ message: "Please enter an item name or sku" });
      }
      if (itemName && itemSku) {
        return res.json({ message: "Please enter only one: an item name OR sku" });
      }
      if (itemName !== "" && itemSku === "") {
        item = await Item.findOne({ itemName })
        .then((data) => {
            res.json({message: "Here is your item NAME request", data});
          })
        .catch((err) => console.log(err)); 
      }
      if (itemSku !== "" && itemName === "") {
        item = await Item.findOne({ itemSku })
        .then((data) => {
            res.json({message: "Here is your item SKU request", data});
          })
        .catch((err) => console.log(err)); 
      }
  },
  getItems: function (req, res) {
    let { _id } = req.body;
    User.findById({ _id })
      .populate({ path: "items", options: { sort: { itemName: 1 } } })
      .exec((err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data.items);
        }
      });
  },
  uploadPhoto: async function (req, res) {
    console.log("uploadPhoto route hit", req.body);
    let { _id, file } = req.body;
    await Item.findById({ _id });
    const newFile = new File({
      filePath: file.path,
      originalName: file.originalname,
      productName: file.productName,
    });
    newFile
      .save()
      .then((file) => res.json(file))
      .catch((err) => {
        console.error("Error saving file to database:", err);
        res.status(500).send("Server Error");
      });
  },
  deleteUser: function (req, res) {
    let { _id } = req.body;
    User.findByIdAndDelete({ _id }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        Item.deleteMany({ userId: data._id }, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.json({ message: "User and user items deleted" });
          }
        });
      }
    });
  },
};
