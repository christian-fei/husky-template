/* global test */
const utils = require('../utils')

const {equal, deepEqual} = require('assert')

test('extract object keys from string', () => {
  deepEqual(['deep'], utils.byKey('deep'))
  deepEqual(['deep', 'foo', 'bar'], utils.byKey('deep.foo.bar'))
})

test('accesses deep property of object by keys array', () => {
  const data = {deep: {foo: 'baz'}}

  equal('baz', utils.keyFor(data, ['deep', 'foo']))
})

test('propFor returns the property in string notation of an object', () => {
  const data = {deep: {foo: 'baz'}}

  equal('baz', utils.lookupKey(data, 'deep.foo'))
})
