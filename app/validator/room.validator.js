const { body, validationResult } = require("express-validator");

exports.create = [
    body('location').exists(),
    body('postalCode').exists(),
]