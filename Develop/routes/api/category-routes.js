const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ["id", "categoryName"],
    include: [
      {
        model: Product,
        attributes: ["id", "productName", "price", "stock", "categoryId"],
      },
    ],
  })
    .then((databaseCategory) => res.json(databaseCategory))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "categoryName"],
    include: [
      {
        model: Product,
        attributes: ["id", "productName", "price", "stock", "categoryId"],
      },
    ],
  })
    .then((databaseCategory) => {
      if (!databaseCategory) {
        res.status(404).json({ message: "id not recognized in this category" });
        return;
      }
      res.json(databaseCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
