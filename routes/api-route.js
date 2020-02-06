const express = require("express");
const router = express.Router();
const db = require('../model')

router.get("/all", (req, res) => {
    db.News.find().then(allNews => {
        res.json(allNews)
    })
})
router.post("/new", (req, res) => {
    db.News.create(req.body).then(newNews => {
        res.json(newNews)
    }).catch(err => res.send(err))
})
// router.post("/comment", (req, res) => {
//     db.News.findByIdAndUpdate({
//         _id: req.query.id
//     }, {
//         $push: {
//             comments: req.query.comment
//         }.then() => {
//             res.send("sccusss")
//         }.catch(err => res.send(err))
//     })
// })
module.exports = router