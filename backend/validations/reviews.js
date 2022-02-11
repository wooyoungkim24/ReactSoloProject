const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const id = check('id')
  .notEmpty()
  .isInt({ min: 0 });
const title = check('title')
  .notEmpty()
const reviewText = check('reviewText')
  .notEmpty()
const rating = check('rating')
  .notEmpty()
  .isInt({ min: 1, max: 5})
  .toInt();
const businessId = check('businessId')
  .notEmpty()
const userId = check('userId').notEmpty();

exports.validateCreate = [
  title,
  reviewText,
  rating,
  businessId,
  userId,
  handleValidationErrors,
];

exports.validateUpdate = [
    title,
    reviewText,
    rating,
    businessId,
    userId,
    handleValidationErrors,
  ];
