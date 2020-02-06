const axios = require("axios")
const cheerio = require("cheerio")
console.log("it works")
const mongoose = require("mongoose")
const connection = mongoose.connection
const db = require("./models")
console.log(connection)
mongoose.connect("mongodb://localhost/newScraper", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
connection.once("open", () => {
    console.log("connected to mongoDB".cyan);
    console.log("----------------".rainbow);
});
db.Article.find({}).then(data => console.log("?", data))
axios.get("http://theguardsman.com/").then(urlResponse => {
    let $ = cheerio.load(urlResponse.data)
    // const data = $("figure.rollover");
    // console.log(data);
    // $("figure.rollover").each((i, element) => {
    //     const imgLink = $(element) //tatget the location and path for the img
    //         .find("img")
    //         .attr("data-srcset")
    //         .split(', ')[1]
    //         .split(', ')[0]
    //     console.log(imgLink, "\n");

    // })
    let inserted = 0
    $("article").each((i, element) => {
        const imgLink = $(element) //tatget the location and path for the img
            .find("a")
            .attr("href")
        // const title = $(element) //tatget the location and path for the img
        //     .find("a")
        //     .attr("title")
        // console.log(title, imgLink, "\n");
        inserted++
        db.Article.create({
                // headline: title,
                link: imgLink
            }).then(success => console.log(success))
            .catch(err => console.error(err))
    })
    console.log(inserted, " records inserted")
})