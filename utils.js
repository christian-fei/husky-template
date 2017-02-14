module.exports = {
  extractKeys,
  accessPropertyOf,
}

function extractKeys (stringProperties) {
  return stringProperties.split('.')
}

function accessPropertyOf (object, propertiesList) {
  let context = object
  for(let i = 0; i <= propertiesList.length; i++) {
    const propertyName = propertiesList[i]
    if (i === propertiesList.length) {
      return context
    }
    if (context && context[propertyName]) {
      context = context[propertyName]
    } else {
      return null
    }
  }
}
