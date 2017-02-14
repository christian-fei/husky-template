/* global test */
const husky = require('..')

const {equal} = require('assert')

test('returns string without keys and type is husky', () => {
  const text = 'lorem ipsum'

  equal(text, husky(text))
})

test('returns formatted string', () => {
  const ipsum = 'ipsum'
  const text = 'lorem {ipsum}'
  const template = husky(text)

  equal('lorem ipsum', template({ipsum}))
})

test('returns curried formatted string', () => {
  const ipsum = 'ipsum'
  const amet = 'amet'
  const text = 'lorem {ipsum} {amet}'
  const template = husky(text)

  const curriedTemplate = template({ipsum})
  equal('lorem ipsum {amet}', curriedTemplate)
  equal('lorem ipsum amet', curriedTemplate({amet}))
})
