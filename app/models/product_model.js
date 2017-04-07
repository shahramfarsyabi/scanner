var Schema = mongoose.Schema;

// create a schema
var productSchema = new Schema({
  title: String,
  barcode : String,
  status: Boolean,
  description: Object,
  price : String,
  discount : String,
  meta: {
    size : String,
    color: String
  },
  images : Array,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Product = mongoose.model('Product', productSchema);

// make this available to our users in our Node applications
module.exports = Product;