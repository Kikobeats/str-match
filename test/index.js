'use strict'

const strmatch = require('..')
require('should')

describe('str-match', function () {
  it('non detection', function () {
    const str = ''
    const result = strmatch(str, null)

    result.match.should.be.false()
    result.input.should.be.equal(str)
    result.output.should.be.equal('')
  })

  it('get substring from a match', function () {
    const str = 'vendo ezzy panther'
    const regex = /ezzy panther/
    const result = strmatch(str, regex)

    result.match.should.be.true()
    result.input.should.be.equal(str)
    result.output.should.be.equal('vendo ')
  })
})
