const mongoose = require('mongoose');
const slugify = require('slugify');


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

categorySchema.pre('save', (next) => {
  this.slug = slugify(this.name, {lower: true});
  next();
});


module.exports = mongoose.model('Category', categorySchema);
