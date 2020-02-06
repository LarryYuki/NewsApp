const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: {
        type: String,
        trim: true,
        required: "Must pass a String vaule for headline"
    },
    link: {
        type: String,
        required: "Must pass a String vaule for link"
    },
    // date: {
    //     type: Date,
    //     default: Date.now()
    // },
    // isDrafe: {
    //     type: Boolean,
    //     default: true
    // },
    // comments: {
    //     type: [Schema.Types.String], //array
    //     default: []

    // }
})
const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article