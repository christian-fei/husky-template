/* global test */
const huskyTemplate = require('..')

const {equal} = require('assert')

test('husky-template', () => {
  test('returns formatted string', () => {
    const ipsum = 'ipsum'
    const text = 'lorem {ipsum}'
    const template = huskyTemplate(text)

    equal('lorem ipsum', template({ipsum}))
  })

  test('returns partially formatted string', () => {
    const ipsum = 'ipsum'
    const text = 'lorem {ipsum}'
    const template = huskyTemplate(text)

    equal('lorem {ipsum}', template({}))
    equal('lorem ipsum', template({ipsum}))
  })

  test('replaces all tokens provided in string', () => {
    const ipsum = 'ipsum'
    const amet = 'dolor sit amet'
    let template = huskyTemplate('lorem {ipsum} {dolor.sit.amet}')
    template = template({ipsum})
    equal(template, 'lorem ipsum {dolor.sit.amet}')
    template = template({dolor: {sit: {amet}}})
    equal(template, 'lorem ipsum dolor sit amet')
  })

  test('maps over object property', () => {
    const ipsum = 'ipsum'.split('')
    let template = huskyTemplate(`lorem {this.ipsum.map(i => i + '_').join('')}`)
    template = template({ipsum})
    equal(template.toString(), 'lorem i_p_s_u_m_')
  })
})
