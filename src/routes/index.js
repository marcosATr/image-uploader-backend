import { uploadImage } from "../controllers/uploadImage.js";
import express from "express";
import multer from "multer";
// require("dotenv").config();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './photos/')
  },
  filename: function (req, file, cb) {
    const extArray = file.mimetype.split("/");
    const extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
})

var upload = multer({ storage: storage });
const routes = express.Router();

routes.post("/photos/upload", upload.array('file', 1), uploadImage);

export { routes };
