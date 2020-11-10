const express = require("express");
const bodyParse = require("body-parser");
const operations = require("./routes/operations.routes");
const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use('/operations', operations);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message, data });
}
);


module.exports = app;