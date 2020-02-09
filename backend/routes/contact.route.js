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

// Get single contact
contactRoute.route('/get-contact/:id').get((req, res) => {
  Contact.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Update contact
contactRoute.route('/patch-contact/:id').put((req, res, next) => {
  Contact.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
      console.log('Contact successfully updated!')
    }
  })
});

module.exports = contactRoute;
