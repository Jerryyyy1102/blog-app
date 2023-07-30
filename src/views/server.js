import express from "express";

require('dotenv').config();
const postRouter = require('./router/post')

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('>>>Check port' + PORT)
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());