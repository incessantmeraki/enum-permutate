var test = require('tape')
var permutate = require('./index.js')

test('first test', function (t) {
  var elements = [1, 2, 3, 4, 5]
  var output = permutate(elements)
  t.equal(output.length, factorial(elements.length))
  t.end()
})

test('second test', function (t) {
  var elements = ['rock', 'paper', 'scissors']
  var output = permutate(elements)
  t.equal(output.length, factorial(elements.length))
  t.end()
})

function factorial(n) {
  var result = 1
  for (let i = 1; i <= n; i++) {
    result = result * i
  }
  return result
}