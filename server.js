const express = require("express")
const mongoose = require("mongoose")
// const bodyParser = require("body-parser")

const items = require('./routes/api/items.js')

const app = express();

// app.use(bodyParser.json());

const db = require("./config/keys.js").mongoURI

mongoose
    .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use('api/items', items)

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))


