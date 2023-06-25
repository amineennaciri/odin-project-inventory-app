const express = require('express');
const router = express.Router();
const createController = require('./../controllers/create');




router.get('/category', createController.getCategoryForm);
router.post('/addCategory', createController.createCategory);
router.get('/item', createController.getItemForm);
router.post('/addItem', createController.createItem);

module.exports = router;