/* global test */
const huskyTemplate = require('..')

const {equal} = require('assert')

test('returns formatted string', () => {
  const ipsum = 'ipsum'
  const text = 'lorem {ipsum}'
  const template = huskyTemplate(text)

  equal('lorem ipsum', template({ipsum}))
})

test('returns curried formatted string', () => {
  const ipsum = 'ipsum'
  const amet = 'amet'
  const text = 'lorem {ipsum} {amet}'
  const template = huskyTemplate(text)

  const curriedTemplate = template({ipsum})
  equal('lorem ipsum {amet}', curriedTemplate)
  equal('lorem ipsum amet', curriedTemplate({amet}))
})

test('supports deep object properties', () => {
  const template = huskyTemplate('lorem ipsum {deep.amet}')
  const amet = 'amet'
  equal('lorem ipsum amet', template({deep: {amet}}))
})

test('returns partially formatted template', () => {
  let template = huskyTemplate('lorem ipsum {amet}')
  equal('lorem ipsum {amet}', template)

  const amet = 'amet'
  template = template({amet})
  equal('lorem ipsum amet', template)
})
