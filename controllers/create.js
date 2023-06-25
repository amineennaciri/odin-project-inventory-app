const Category = require("../models/category");
const Item = require("../models/item");


module.exports = {
    getCategoryForm: (req,res)=>{
      res.render('formCategory.ejs');
    },
    getItemForm: (req,res)=>{
      res.render('formItem.ejs');
    },
    createCategory: async (req, res) => {
        try {    
          await Category.create({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
          });
          console.log("Category was added!");
          res.redirect("/");
        } catch (err) {
          console.log(err);
        }
      },
      createItem: async (req, res) => {
        try {    
          await Item.create({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category,
          });
          console.log("Item was added!");
          res.redirect("/");
        } catch (err) {
          console.log(err);
        }
      }
}