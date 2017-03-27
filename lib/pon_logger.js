/**
 * Logger for pon
 * @class PonLogger
 * @param {Object} [config={}]
 * @param {string} [config.prefix] - Log prefix
 * @param {number} [config.indent] - Number of indent
 */
'use strict'

const { Colorprint } = require('colorprint')

/** @lends PonLogger */
class PonLogger extends Colorprint {
  /**
   * Print notice message.
   * @method PonLogger#notice
   * @param {...string} msg - Message to print.
   */
  /**
   * Print info message.
   * @method PonLogger#info
   * @param {...string} msg - Message to print.
   */
  /**
   * Print debug message.
   * @method PonLogger#debug
   * @param {...string} msg - Message to print.
   */
  /**
   * Print trace message.
   * @method PonLogger#trace
   * @param {...string} msg - Message to print.
   */
  /**
   * Print warn message.
   * @method PonLogger#warn
   * @param {...string} msg - Message to print.
   */
  /**
   * Print error message.
   * @method PonLogger#error
   * @param {...string} msg - Message to print.
   */
  /**
   * Print fatal message.
   * @method PonLogger#fatal
   * @param {...string} msg - Message to print.
   */
}

module.exports = PonLogger
