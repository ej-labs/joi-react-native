'use strict';

require("@babel/polyfill");

// Polyfill for string.prototype.normalize
require("unorm");

const Joi = require('joi');

module.exports = Joi;
