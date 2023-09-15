let mongoose = '../../../server/node_modules/mongoose'
mongoose = require(mongoose)
// multer = require('multer');

const PictureSchema = new mongoose.Schema({
    filePath: String,
    originalName: String,
    productName: String,
    date: {
      type: Date,
      default: Date.now
    }
  });
  
// const Picture = mongoose.model('Picture', PictureSchema);
module.exports = mongoose.model("Picture", PictureSchema);

const ItemSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    itemName: {
        type: String
    },
    itemSku: {
        type: String
    },
    itemCartQuantity: {
        type: Number
    },
    itemWarehouseQuantity: {
        type: Number
    },
    itemCost: {
        type: Number
    },
    itemPrice: {
        type: Number
    },
    itemPictures: [ PictureSchema ]
})

module.exports = mongoose.model("Item", ItemSchema)