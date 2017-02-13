/* global test */
const husky = require('..')

const {equal} = require('assert')

test('returns string without keys', () => {
  const text = 'lorem ipsum'
  const template = husky(text)

  equal(text.toString(), template())
})
