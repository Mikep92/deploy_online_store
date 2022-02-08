var mongoose = require("../config/db_connection");
const { model } = require("../config/db_connection");
var Schema = mongoose.Schema; //Gom cac title vao
var buffSchema = new Schema({
    // table gom cac thuoc tinh sau:
    name: String,
    code: String,
    rating: String,
    priceMin: String,
    priceMax: String,
    featureImage: Array,
    subImage: Array,
    shortDesc: String,
});
//Model: tuong tac khi thuc hien lenh
var buffModel = mongoose.model("product", buffSchema); //Ten cua table = AccountModel
module.exports = buffModel;
