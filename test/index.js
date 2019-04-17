'use strict'

const strmatch = require('..')
const should = require('should')

describe('str-match', function () {
  it('non clean after non detection', function () {
    const matcher = strmatch()
    const str = ''
    const result = matcher(str, null)

    should(result).be.eql({
      test: false,
      match: undefined,
      input: '',
      output: ''
    })
  })

  it('escape regex pattern', function () {
    const matcher = strmatch()
    const str = '150€)'
    const regex = /([0-9]+[,.'])*[0-9]+[ ]?[€eE](\W|\s|$)/
    const result = matcher(str, regex)

    should(result).be.eql({
      test: true,
      match: '150€)',
      input: '150€)',
      output: ''
    })
  })

  it('apply transformations', function () {
    const matcher = strmatch()
    const str = 'vendo ezzy panther'
    const regex = /ezzy panther/
    const result = matcher(str, regex)

    should(result).be.eql({
      test: true,
      match: 'ezzy panther',
      input: 'vendo ezzy panther',
      output: 'vendo '
    })
  })

  describe('options', function () {
    it('flags', function () {
      const matcher = strmatch({ flags: 'g' })
      const str = 'back to 1984, my 1984 friend'
      const regex = /1984/
      const result = matcher(str, regex)

      should(result).be.eql({
        test: true,
        match: '1984',
        input: 'back to 1984, my 1984 friend',
        output: 'back to , my  friend'
      })
    })

    it('replacement', function () {
      const matcher = strmatch({
        replacement: value => value.toLowerCase(),
        flag: ''
      })
      const str = '<meta hello="World" />'
      const regex = /\w*="\w*"/

      const result = matcher(str, regex)

      should(result).be.eql({
        test: true,
        match: 'hello="World"',
        input: '<meta hello="World" />',
        output: '<meta hello="world" />'
      })
    })
  })
})
