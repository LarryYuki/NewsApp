const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const colors = require("colors");
const connection = mongoose.connection;
const PORT = 5566;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json()); 

mongoose.connect("mongodb://localhost/newScraper", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
connection.once("open", () => {
    console.log("connected to mongoDB".cyan);
    console.log("----------------".rainbow);
});

const apiRoutes = require("./controller/api-routes");
app.use("/api", apiRoutes);

const clientRoutes = require("./controller/client-routes");
app.use("/", clientRoutes)


app.use(logger("dev"));
app.listen(PORT, () => {
    console.log("----------------\n".rainbow);
    console.log(`App listening at http:localhost:${PORT}`.cyan);
});

// ---------------------------------------------

// const axios = require("axios")
// const cheerio = require("cheerio")
// // const colors =require("colors")
// const Article=require("../../models/Article")
// console.log("it works")

// const mongoose = require("mongoose")
// const connection = mongoose.connection
// const db = require("../../models")
// console.log(connection)

// mongoose.connect("mongodb://localhost/newScraper", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// connection.once("open", () => {
//     console.log("connected to mongoDB");
//     console.log("----------------".rainbow);
// });

// db.Article.find({}).then(data => console.log("?", data))
// axios.get("https://www.sfchronicle.com/local/todayspaper/").then(urlResponse => {
//     let $ = cheerio.load(urlResponse.data)

//     // let inserted = 0
//     $("li.hc_more_item").each((i, element) => {
//         const Url = $(element) 
//             .find("a")
//             .attr("href")
            
//         const title = $(element) 
//             .find("a")
//             .text()
//         console.log(title, "\n");
//         console.log(Url);
    
//         console.log("---------------\n".rainbow);
        
//          inserted++
//          db.Article.create({
//        title:title,
//          summary: summary,
//          Url:Url
//                 }).then(success => console.log(success))
//                  .catch(err => console.error(err))
//     })
//      console.log(inserted, " records inserted")
// })