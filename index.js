const utils = require('./utils')
const pattern = /(\{.*?\})/g

module.exports = huskyFrom

function huskyFrom (template) {
  const huskyTemplate = function (object) {
    const result = template.replace(pattern, (match, notation) => {
      return utils.lookupKey(object, notation) || match
    })
    return Object.assign(huskyFrom(result), {
      toString () {
        return result
      }
    })
  }
  huskyTemplate.toString = () => template

  return huskyTemplate
}
