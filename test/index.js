/* global test */
const husky = require('..')

const {equal} = require('assert')

test('renders plain string without interpolation', () => {
  const plainString = 'lorem ipsum'
  console.log(husky)
  const template = husky(plainString)

  equal(plainString, template())
})
