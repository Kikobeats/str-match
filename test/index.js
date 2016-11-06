'use strict'

const strmatch = require('..')
const should = require('should')

describe('str-match', function () {
  it('non detection', function () {
    const str = ''
    const result = strmatch(str, null)

    result.test.should.be.false()
    should(result.match).be.undefined()
    result.input.should.be.equal(str)
    result.output.should.be.equal('')
  })

  it('get substring from a match', function () {
    const str = 'vendo ezzy panther'
    const regex = /ezzy panther/
    const result = strmatch(str, regex)

    result.test.should.be.true()
    result.match.should.be.equal('ezzy panther')
    result.input.should.be.equal(str)
    result.output.should.be.equal('vendo ')
  })
})
