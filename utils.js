module.exports = {
  lookupKey,
  evaluateOn
}

function lookupKey (object, objectNotation) {
  return objectNotation
        .split('.')
        .reduce((context, property) => context ? context[property] : null, object)
}

function evaluateOn (object, evaluation) {
  try {
    return (function () {
      return eval(evaluation)
    }.call(object))
  } catch (e) {}
}
