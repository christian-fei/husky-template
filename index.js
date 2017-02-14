const utils = require('./utils')

module.exports = huskyFrom

function huskyFrom (template) {
  const huskyTemplate = function (data) {
    const pattern = /\{(.*?)\}/g
    const result = template.replace(pattern, (match, key) => {
      const keys = utils.extractKeys(key)
      return utils.accessPropertyOf(data, keys)
      return data[key] || match
    })
    return huskyFrom(result)
  }
  huskyTemplate.toString = () => template

  return huskyTemplate
}
