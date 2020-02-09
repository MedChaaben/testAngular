const express = require('express');
const app = express();
const contactRoute = express.Router();

// Contact model
let Contact = require('../model/Contact');

// Add Contact
contactRoute.route('/add-contact').post((req, res, next) => {
  Contact.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      if (data['shouldAddToNewsletter']) {
        console.log(data);
      }
      res.json(data)
    }
  })
});

// Get all contacts
contactRoute.route('/').get((req, res) => {
  Contact.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = contactRoute;
