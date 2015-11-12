
module.exports = function(notation) {
  notation = notation.trim()

  if (notation === '')
    return null

  var tokens = notation.split(/\s+/)

  var stack = []
  while (tokens.length) {
    var token = tokens.shift()

    if (isValue(token)) {
      stack.push(token)

    } else if (isOperator(token)) {
      var a = stack.pop()
      var b = stack.pop()

      if (a == null || b == null)
        return null // Corrupted notation, wrong token order

      stack.push(operators[token](+a, +b))

    } else {
      return null // Unsupported token
    }
  }

  if (stack.length !== 1)
    return null // Invalid notation length

  return stack.pop()
}


var operators = {
  '+': function(a, b) { return b + a },
  '-': function(a, b) { return b - a },
  '*': function(a, b) { return b * a },
  '/': function(a, b) { return b / a },
}

var isOperator = function(token) {
  return token in operators
}

var isValue = function(token) {
  return !isNaN(parseFloat(token)) && isFinite(token)
}
