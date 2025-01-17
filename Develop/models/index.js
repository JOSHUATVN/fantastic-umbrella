// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryID'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryID'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  passing: ProductTag,
  foreignKey: 'productId',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  passing: ProductTag,
  foreignKey: 'tagId',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
