const express           = require("express");
var httpStatus          = require("http-status");
const router            = express.Router();
const multer            = require("multer");
const path              = require('path');


router.use('*', (req, res) =>
    res.status(httpStatus.NOT_IMPLEMENTED).json({
        success: 0,
        message: 'API Root Path Missing.',
        status: httpStatus.NOT_IMPLEMENTED,
        data: [],
    })
);


module.exports = router;

console.log('Executing API routes: routes.js ...');