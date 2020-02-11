const axios = require("axios")
const cheerio = require("cheerio")
const colors =require("colors")
const Article=require("../models/Article")
console.log("it works")

const mongoose = require("mongoose")
const connection = mongoose.connection
const db = require("../models")
console.log(connection)

mongoose.connect("mongodb://localhost/newScraper", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
connection.once("open", () => {
    console.log("connected to mongoDB");
    console.log("----------------".rainbow);
});

// db.Article.find({}).then(data => console.log("?", data))
axios.get("https://www.sfchronicle.com/local/todayspaper/").then(urlResponse => {
    let $ = cheerio.load(urlResponse.data)

    // let inserted = 0
    $("li.hc_more_item").each((i, element) => {
        const Url = $(element) 
            .find("a")
         .attr("href")
            const link=`https://www.sfchronicle.com/`+Url
        const title = $(element) 
            .find("a")
            .text()
        console.log(title, "\n");
        console.log(link);
    
        console.log("---------------\n".rainbow);
        
        //  inserted++
         db.Article.insertMany({
       title:title,
        //  summary: summary,
         Url:link
                }).then()
                    // success => 
                    // console.log(success)
                    // )
                 .catch(err => console.error(err))
    })
    //  console.log(inserted, " records inserted")
})