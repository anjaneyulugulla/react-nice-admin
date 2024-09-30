'use strict';
const fs                = require('fs');
const join              = require('path').join;
const express           = require("express");
const app               = express();
const cors              = require('cors');
const morgan            = require('morgan');
const methodOverride    = require("method-override");
const bodyParser        = require("body-parser");
const jwt               = require('jsonwebtoken');
var routes              = require('../service/routes');
const cookieParser      = require('cookie-parser');
const fileUpload        = require('express-fileupload');
const rateLimiter       = require('express-rate-limit');
const helmet            = require('helmet');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/users/' })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(cors());
app.use('/', routes);
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);

app.use(helmet());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));
app.use(fileUpload());

const port = process.env.PORT || 5050;

module.exports = app;