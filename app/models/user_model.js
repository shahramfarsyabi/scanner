var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { 
    type: String, 
    required: true, 
    unique: true
  },
  password: { type: String, required: true },
  admin: Boolean,
  location: Object,
  meta: {
    age: Number,
    website: String
  },
  invitedBy : Object,
  inviteList : Array,
  checkedProductsByBarcode : Array,
  status : Boolean,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;