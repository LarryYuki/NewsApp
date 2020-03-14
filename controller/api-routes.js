const express = require("express");
const router = express.Router();
const axios = require("axios")
const cheerio = require("cheerio")
const colors =require("colors")
const Article=require("../models/Article")


const mongoose = require("mongoose")
const connection = mongoose.connection
const db = require("../models")
console.log(connection)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newScraper", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
connection.once("open", () => {
    console.log("connected to mongoDB");
    console.log("----------------".rainbow);
});

// scrape route
router.get("/scrape", (req,res)=>{

    axios.get("https://www.sfchronicle.com/local/todayspaper/").then(urlResponse => {
        let $ = cheerio.load(urlResponse.data)
        let dataArr = [];

    $("li.hc_more_item").each((i, element) => {
        const Url = $(element) 
            .find("a")
            .attr("href")

        const link=`https://www.sfchronicle.com/`+Url
        const title = $(element) 
            .find("a")
            .text()

        dataArr.push({title, link})
        });
    res.send(dataArr)
    });
});
//article route
router.get("/articles", (req, res) => {
    Article.find({ "saved": false }, (error, doc) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json(doc);
        }
    });
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const db = require("../models");

// router.get("/", (req, res) => {
//   db.Article.find().then(allarticles => {
//   res.json(allarticles );
//   });
// });
// router.post("/", (req, res) => {
//     console.log(req.body);
//   db.Article.create(req.body).then(allarticles => {
//     res.json(allarticles );
//   });
// });

// module.exports = router;