const express = require('express');
const router = express.Router();
const createController = require('./../controllers/create');

//router.get('/new', createController.getForm);
router.post('/post', createController.createCategory);

router.get('/new', (req, res) => {
    res.render('formCategory.ejs');
})

module.exports = router;