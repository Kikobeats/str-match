'use strict'

const replace = require('lodash.replace')
const first = require('lodash.first')
const exists = require('existential')

const DEFAULTS = {
  OPTS: {
    replacement: '',
    flags: ''
  }
}

function factory (opts) {
  const {replacement, flags} = Object.assign({}, DEFAULTS.OPTS, opts)

  function strmatch (input, regex) {
    const match = first(input.match(regex))
    const replacer = RegExp(match, flags)
    const output = replace(input, replacer, replacement)

    return { test: exists(match), match, input, output }
  }

  return strmatch
}

module.exports = factory
