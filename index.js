'use strict'

const escapeStringRegexp = require('escape-string-regexp')

module.exports = ({ replacement = '', flags = '' } = {}) => (input, regex) => {
  const matches = input.match(regex)
  const match = matches ? matches[0] : undefined
  const pattern = match && escapeStringRegexp(match)
  const replacer = RegExp(pattern, flags)

  const output = input.replace(replacer, replacement)
  const test = match !== undefined && match !== null

  return { test, match, input, output }
}
