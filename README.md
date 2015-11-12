
# node-reverse-polish-notation [![Build Status](https://travis-ci.org/runk/node-reverse-polish-notation.svg?branch=master)](https://travis-ci.org/runk/node-reverse-polish-notation)

Reverse Polish Notation - Native Javascript implemenation


## Installation

```shell
npm i reverse-polish-notation
```


## Usage

** see code samples in `./test` directory **


```javascript
var rpn = require('reverse-polish-notation')
console.log(rpn('5 1 2 + 4 * + 3 -')) // prints "14"
console.log(rpn('3 4 5 * -')) // prints "-17"
console.log(rpn('3.1 -4.3 5.6 * -')) // prints "27.18"
```


## References
 - https://en.wikipedia.org/wiki/Reverse_Polish_notation


## License

MIT
