const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
/**
 * 'name': [null, Validators.required],
 'email': [null, Validators.required],
 'phoneNumber': [null, Validators.required],
 'shouldAddToNewsletter': [null]
 */

let Contact = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  shouldAddToNewsletter: {
    type: Boolean
  }
}, {
  collection: 'contacts'
});

module.exports = mongoose.model('Contact', Contact);
