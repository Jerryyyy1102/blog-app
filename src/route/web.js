import express from "express";
let router = express.Router();

const initWebRoute = (app) => {

    return app.use('/', router)
}