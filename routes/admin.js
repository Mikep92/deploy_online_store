var express = require("express");
var _ = require("lodash");
var router = express.Router();
var axios = require("axios");
var model = require("../model/productModel");
const productData = require("../data/product.json");

/*Add new product */
router.post("/product", auth, async function (req, res, next) {
    let name = req.body.name;
    let code = req.body.code;
    let rating = req.body.rating;
    let priceMin = req.body.priceMin;
    let priceMax = req.body.priceMax;
    let featureImage = req.body.featureImage;
    let subImage = req.body.subImage;
    let shortDesc = req.body.shortDesc;
    let result = await model.create({ name, code, rating, priceMin, priceMax, featureImage, subImage, shortDesc })
    return res.json({ data: result.data })
});
// UPDATE PRODUCT
router.put("/product", auth, async function (req, res, next) {
    let id = req.body.id;
    let name = req.body.name;
    let code = req.body.code;
    let rating = req.body.rating;
    let priceMin = req.body.priceMin;
    let priceMax = req.body.priceMax;
    let featureImage = req.body.featureImage;
    let subImage = req.body.subImage;
    let shortDesc = req.body.shortDesc;
    let result = await model.updateOne({ _id: id }, { name, code, rating, priceMin, priceMax, featureImage, subImage, shortDesc })
    return res.json({ data: result.data })
});
// GET PRODUCT BY ID
router.get("/product", async (req, res) => {
    let product = await model.find({});
    return res.json({ data: product });
});
router.delete("/product", auth, async (req, res) => {
    let id = req.body.id
    let product = await model.deleteOne({ _id: id });
    return res.json({ data: product });
});
// MiddleWare
function auth(req, res, next) {
    if (req.body.otp = !'12eha#so#de%rur#*&$^@JFH98y23') {
        res.json({ message: "Xác minh thất bại", data: null })
    }
    else next()
}
module.exports = router;
