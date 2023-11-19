const Category = require('../models/categoryModel');

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(401).json({ error: 'Name is required' });

    const exists = await Category.findOne({ name });

    if (exists) return res.status(401).json({ error: 'Name is required' });

    const category = new Category({ name });

    category.save()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          message: 'Category created successfully',
          category,
          request: {
            type: 'GET',
            url: 'http://localhost:4000/api/categories/' + category._id
          }
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

// Get a category

const getACategory = async (req, res) => {
  const { slug } = res.body;

  if (!slug) return res.status(401).json({ error: 'Slug is required' });

  Category.findOne({ slug })
    .exec()
    .then(category => {
      res.status(200).json({
        category,
        request: {
          type: 'GET',
          url: 'http://localhost:4000/orders'
        }
      });
    });
};

// Gets all categories

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(200).json({
      success: true,
      message: 'All Categories List',
      categories
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err,
      message: 'Error while getting categories'
    });
  }
};

// Update a category

const updateCategory = async (req, res) => {
  const { slug } = req.body;

  if (!slug) return res.status(401).json({ error: 'Slug is required' });

  try {
    const category = await Category.findOneAndUpdate(
      slug, { ...req.body }, { new: true }
    );
    return res.status(200).json({
      message: 'Category updated successfully',
      category,
      request: {
        type: 'GET',
        url: 'http://localhost:4000/categories'
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err
    });
  }
};

const removeCategory = async (req, res) => {
  const { slug } = req.body;

  if (!slug) return res.status(401).json({ error: 'Slug is required' });

  try {
    const result = await Category.findOneAndDelete({ slug });

    if (!result) {
      return res.status(404).json({ error: 'Invalid Slug' });
    }
    res.status(200).send({
      message: 'Product deleted successfully'
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

module.exports = { getACategory, getAllCategories, updateCategory, removeCategory, createCategory };
