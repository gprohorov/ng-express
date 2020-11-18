// npm i -D babel-cli babel-preset-env babel-preset-stage-0
// npm i -D nodemon
// npm i -S express
// npm i -S morgan
// npm i -S body-parser
// npm i -S mongoose
// npm i -S cors
import express from 'express';
import items from './data/items.json';
//import ItemRoute from'./routes/ItemRoute';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const PORT = process.env.PORT || 8080;
const server = express();
const buildUrl = (version, path) => `/api/${version}/${path}`;
const ITEMS_BASE_URL = buildUrl('v1', 'items');
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
};

server.use(morgan('tiny'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors(corsOptions))
//server.use(ITEMS_BASE_URL, ItemRoute);

server.get("/welcome", (req, res) => {
    res.json({ message: "Welcome to db branch  Angular\Node  application." });
});

console.log("Hello");
require("./route/item.route")(server);

server.listen(PORT, () => {
    //  console.log(buildUrl('v1', 'items'));
    console.log(`Server has been started on port ${PORT}`);
});


const db = require("./model");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });













