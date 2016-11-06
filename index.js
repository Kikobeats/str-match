'use strict'

const replace = require('lodash.replace')
const first = require('lodash.first')
const exists = require('existential')

function strmatch (input, regex) {
  const match = first(input.match(regex))
  const output = replace(input, match, '')
  return { test: exists(match), match, input, output }
}

module.exports = strmatch
