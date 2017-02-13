/* global test */
const husky = require('..')

const {equal} = require('assert')

test('returns plain string without keys', () => {
  const plainString = 'lorem ipsum'
  const template = husky(plainString)

  equal(plainString, template())
})
