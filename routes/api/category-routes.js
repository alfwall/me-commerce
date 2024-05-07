const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  //console.log("GET CATEGORIES!")
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }]
    });
    //console.log(categoriesData)
    res.status(200).json(categoriesData);
  }
  catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    //console.log("GET CATEGORIES!")
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryData) {
      res.status(404).json({ message: `No category with id "${req.params.id}" found!` })
      return;
    }
    res.status(200).json(categoryData);
  }
  catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    //console.log(req.body);
    const newCategoryData = await Category.create(req.body);
    res.status(200).json(newCategoryData);
  }
  catch(error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    if (!req.body || !req.body.newName) {
      throw new Error("Bad body!")
    }
    await Category.update(
      {
        category_name: req.body.newName
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    var updatedCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(updatedCategory);
  }
  catch(error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    //console.log("Attempting to delete Category id " + req.params.id)
    await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    const remainingCategoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(remainingCategoryData);
  }
  catch(error) {
    //console.error(error);
    res.status(400).json(error);
  }
});

module.exports = router;
