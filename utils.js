module.exports = {
  lookupKey,
  evaluateOn
}

function lookupKey (object, notation) {
  return notation
  .split('.')
  .reduce((context, propertyName) => {
    return context && context[propertyName]
      ? context[propertyName]
      : null
  }, object)
}

function evaluateOn (object, evaluation) {
  try {
    return (function () {
      return eval(evaluation)
    }.call(object))
  } catch (e) {}
}
