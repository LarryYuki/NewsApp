const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: {
        type: String,
        require: true,
        // required: "Must pass a String vaule for headline"
    },
    url: {
        type: String,
        require:true,
        // required: "URL is required"
    },
//  summary:{
//      type:String,
//      require:true
//  },
//  saved:{
//      type:Boolean,
//      default:false
//  }
})

const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article