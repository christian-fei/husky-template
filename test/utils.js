/* global test */
const utils = require('../utils')

const {equal, deepEqual} = require('assert')

test('extract object keys from string', () => {
  deepEqual(['deep'], utils.extractKeys('deep'))
  deepEqual(['deep', 'foo', 'bar'], utils.extractKeys('deep.foo.bar'))
})


test('accesses deep property of object by keys array', () => {
  const data = {deep: {foo: 'baz'}}

  equal('baz', utils.accessPropertyOf(data, ['deep', 'foo']))
})
