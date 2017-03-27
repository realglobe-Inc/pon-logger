'use strict'

const ponLogger = require('pon-logger')

{
  let logger = ponLogger()
  logger.notice('This is notice message')
  logger.info('This is info message')
  logger.debug('This is debug message')
  logger.warn('This is warn message')
  logger.error('This is error message')
  logger.fatal('This is fatal message')
}
