/* global test */
const utils = require('../utils')

const {equal, deepEqual} = require('assert')

test('utils', () => {
  test('.lookupKey returns deep property value by lookup notation', () => {
    const data = {deep: {foo: 'baz'}}

    equal('baz', utils.lookupKey(data, 'deep.foo'))
  })
})
