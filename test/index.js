'use strict'

const strmatch = require('..')
const should = require('should')

describe('str-match', function () {
  describe('non options', function () {
    const matcher = strmatch()

    it('non detection', function () {
      const str = ''
      const result = matcher(str, null)

      result.test.should.be.false()
      should(result.match).be.undefined()
      result.input.should.be.equal(str)
      result.output.should.be.equal('')
    })

    it('get substring from a match', function () {
      const str = 'vendo ezzy panther'
      const regex = /ezzy panther/
      const result = matcher(str, regex)

      result.test.should.be.true()
      result.match.should.be.equal('ezzy panther')
      result.input.should.be.equal(str)
      result.output.should.be.equal('vendo ')
    })
  })

  describe('with options', function () {
    const matcher = strmatch({flags: 'g'})

    it('remove global match', function () {
      const str = 'back to 1984, my 1984 friend'
      const regex = /1984/
      const result = matcher(str, regex)

      result.test.should.be.true()
      result.match.should.be.equal('1984')
      result.input.should.be.equal(str)
      result.output.should.be.equal('back to , my  friend')
    })
  })
})
