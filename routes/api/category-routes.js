const router = require("express").Router();
const db = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  db.Category.findAll({
    include: [db.Product],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  db.Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Product],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post("/", (req, res) => {
  // create a new category
  console.log(req.body);
  db.Category.create({
    id: req.body.id,
    category_name: req.body.category_name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  db.Category.update({
    id: req.body.id,
    category_name: req.body.category_name,
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  db.Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
