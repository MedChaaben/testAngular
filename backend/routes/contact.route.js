const express = require('express');
const app = express();
const contactRoute = express.Router();

const utils = require ('../utils/utils.functions');

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

      // functionthe largest number call
      console.log('The largest number is: ', utils.sortPhone(data['phoneNumber']));
      res.json(data);
    }
  });
});

// Get all contacts
contactRoute.route('/').get((req, res) => {
  Contact.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  }).sort({ 'name' : 'asc'});
});

module.exports = contactRoute;
