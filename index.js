'use strict'

const replace = require('lodash.replace')
const first = require('lodash.first')
const exists = require('existential')

function strmatch (str, regex) {
  const match = first(str.match(regex))
  const output = replace(str, match, '')
  return { match: exists(match), input: str, output }
}

module.exports = strmatch
