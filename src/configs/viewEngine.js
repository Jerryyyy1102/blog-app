import express from "express";
const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    app.use(express.static('./src/public'));
}

// Muốn sử dụng func giữa các file thì sử dụng lệnh export
export default configViewEngine;