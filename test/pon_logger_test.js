/**
 * Test case for ponLogger.
 * Runs with mocha.
 */
'use strict'

const PonLogger = require('../lib/pon_logger.js')
const {ok} = require('assert')

describe('pon-logger', function () {
  this.timeout(3000)

  before(() => {

  })

  after(() => {

  })

  it('Pon logger', () => {
    const logger = new PonLogger({prefix: '[x]'})
    ok(logger)
    logger.notice('This is notice message')
    logger.info('This is info message')
    logger.debug('This is debug message')
    logger.warn('This is warn message')
    logger.error('This is error message')
    logger.fatal('This is fatal message')

    logger.disabled = true
    logger.notice('hoge')
    logger.disabled = false

    {
      const withoutPrefix = logger.withoutPrefix()
      withoutPrefix.debug('hoge without prefix')
    }
    logger.debug('hoge')
  })
})

/* global describe, before, after, it */
