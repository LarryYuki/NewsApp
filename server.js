const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const colors = require("colors");
const connection = mongoose.connection;
const PORT = 5566;
mongoose.connect("mongodb://localhost/News", { //??
    useNewUrlParser: true,
    useUnifiedTopology: true
});
connection.once("open", () => {
    console.log("connected to mongoDB".cyan);
    console.log("----------------".rainbow);
});
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(logger("dev"));
app.listen(PORT, () => {
    console.log("----------------\n".rainbow);
    console.log(`App listening at http:localhost:${PORT}`.cyan);
});