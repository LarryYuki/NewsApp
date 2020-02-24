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

