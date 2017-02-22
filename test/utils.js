/* global test */
const utils = require('../utils')

const {equal, deepEqual} = require('assert')

test('utils', () => {
  test('.lookupKey returns deep property value by lookup notation', () => {
    const data = {deep: {foo: 'baz'}}

    equal('baz', utils.lookupKey(data, 'deep.foo'))
  })

  test('.evaluateOn evaluates code on data', () => {
    const data = {numbers: [1, 2, 3]}

    deepEqual([2, 4, 6], utils.evaluateOn(data, 'this.numbers.map(n => n * 2)'))
    deepEqual('246', utils.evaluateOn(data, `this.numbers.map(n => n * 2).join('')`))
  })
})
