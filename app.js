// npm i -D babel-cli babel-preset-env babel-preset-stage-0
// npm i -D nodemon
// npm i -S express
// npm i -S morgan
// npm i -S body-parser
// npm i -S mongoose
import express from 'express';
import items from './data/items.json';
//import ItemRoute from'./routes/ItemRoute';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const PORT = 3000;
const server = express();
const buildUrl = (version, path) => `/api/${version}/${path}`;
const ITEMS_BASE_URL = buildUrl('v1', 'items');

server.use(morgan('tiny'));
server.use(bodyParser.json());

//server.use(ITEMS_BASE_URL, ItemRoute);

console.log("Hello")
server.listen(PORT, () => {
    //  console.log(buildUrl('v1', 'items'));
    console.log(`Server has been started on port ${PORT}`);
});
