/**
 * Create a PonLogger instance
 * @function create
 * @param {...*} args
 * @returns {PonLogger}
 */
'use strict'

const PonLogger = require('./pon_logger')

/** @lends create */
function create (...args) {
  return new PonLogger(...args)
}

module.exports = create
