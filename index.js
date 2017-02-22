const utils = require('./utils')
const pattern = /\{(.*?)\}/g
const {assign} = Object

module.exports = function huskyTemplate (template) {
  return assign(huskyFrom, {toString})

  function huskyFrom(values) {
    return huskyTemplate(template.replace(pattern, using(values)))
  }

  function using(values) {
    return (match, notation) => {
      const key = utils.lookupKey(values, notation)
      if (key) { return key }
      try {
        return utils.evaluateOn(values, notation)
      } catch (e) {}
      return match
    }
  }

  function toString () {
    return template
  }
}
