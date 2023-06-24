const express = require('express');
const router = express.Router();
const createController = require('./../controllers/create');

router.get('/newCategory', createController.getCategoryForm);
router.post('/addCategory', createController.createCategory);
router.get('/newItem', createController.getItemForm);
router.post('/addItem', createController.createItem);

module.exports = router;