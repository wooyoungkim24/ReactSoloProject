const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const id = check('id')
  .notEmpty()
  .isInt({ min: 0 });
const title = check('title')
  .notEmpty()
  .withMessage("Missing Title")
const reviewText = check('reviewText')
  .notEmpty()
  .withMessage("Missing Review")
const rating = check('rating')
  .notEmpty()
  .withMessage("Missing Rating")
  // .isInt({ min: 1, max: 5})
  // *future*
  // .toInt();
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
