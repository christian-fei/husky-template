module.exports = {
  byKey,
  keyFor,
  lookupKey
}

function byKey (notations) {
  return notations.split('.')
}

function keyFor (object, propertiesList) {
  let context = object
  for (let i = 0; i <= propertiesList.length; i++) {
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

function lookupKey (object, notation) {
  return keyFor(object, byKey(notation))
}
