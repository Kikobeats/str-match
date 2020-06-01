'use strict'

const escapeStringRegexp = require('escape-string-regexp')
const replace = require('lodash.replace')
const exists = require('existential')

const DEFAULTS = {
  OPTS: {
    replacement: '',
    flags: ''
  }
}

function factory (opts) {
  const { replacement, flags } = Object.assign({}, DEFAULTS.OPTS, opts)

  function strmatch (input, regex) {
    const matches = input.match(regex)
    const match = matches ? matches[0] : undefined
    const pattern = match && escapeStringRegexp(match)
    const replacer = RegExp(pattern, flags)

    const output = replace(input, replacer, replacement)

    return { test: exists(match), match, input, output }
  }

  return strmatch
}

module.exports = factory
