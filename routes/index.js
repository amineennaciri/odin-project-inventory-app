const express = require('express');
const router = express.Router();
const homeController = require('./../controllers/home');

/* router.get('/', (req, res) => {
    //res.send('<h1>Hello world!</h1>');
    res.render('index.ejs');
}); */

router.get('/', homeController.getIndex);

module.exports = router;