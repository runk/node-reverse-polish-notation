var assert = require('assert')
var rpn = require('../')


describe('reverse-polish-notation', function() {

  it('should work fine for basic cases', function() {
    assert.equal(rpn(''), null)
    assert.equal(rpn('4 2 +'), 6)
    assert.equal(rpn('4 2 *'), 8)
    assert.equal(rpn('4 2 /'), 2)
    assert.equal(rpn('4 2 -'), 2)
  })

  it('should work fine with odd spacing', function() {
    assert.equal(rpn('  '), null)
    assert.equal(rpn('4 2   +'), 6)
    assert.equal(rpn('4  2 *'), 8)
    assert.equal(rpn('4    2 /'), 2)
    assert.equal(rpn(' 4 2 -  '), 2)
  })

  it('should work fine with more complex cases', function() {
    assert.equal(rpn('5 1 2 + 4 * + 3 -'), 14)
    assert.equal(rpn('3 4 5 * -'), -17)
  })

  it('should support floats and negative numbers', function() {
    assert.equal(rpn('5 1.6 2 + 4.9 * + -3 -'), 25.64)
    assert.equal(rpn('3.1 -4.3 5.6 * -'), 27.18)
  })

  it('should handle invalid notations gracefully', function() {
    assert.equal(rpn('1 2 - +'), null)
    assert.equal(rpn('1 2 3'), null)
    assert.equal(rpn('1 boom! -'), null)
  })

})
