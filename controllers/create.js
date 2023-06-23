const Category = require("../models/category");
const Item = require("../models/item");

module.exports = {
    getForm: (req,res)=>{
      //res.render('formCategory.ejs')
      res.send('<p>some html</p>');
    },
    createCategory: async (req, res) => {
        try {    
          await Category.create({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
          });
          console.log("Post has been added!");
          res.redirect("/");
        } catch (err) {
          console.log(err);
        }
      }
}