/**
 * Test case for ponLogger.
 * Runs with mocha.
 */
'use strict'

const PonLogger = require('../lib/pon_logger.js')
const { ok } = require('assert')
const co = require('co')

describe('pon-logger', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pon logger', () => co(function * () {
    let logger = new PonLogger()
    ok(logger)
    logger.notice('This is notice message')
    logger.info('This is info message')
    logger.debug('This is debug message')
    logger.warn('This is warn message')
    logger.error('This is error message')
    logger.fatal('This is fatal message')
  }))
})

/* global describe, before, after, it */
