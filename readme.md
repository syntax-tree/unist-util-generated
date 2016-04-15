# unist-util-generated [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [**Unist**][unist] [node][] is [**generated**][spec].

## Installation

[npm][]:

```bash
npm install unist-util-generated
```

**unist-util-generated** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var generated = require('unist-util-generated');
```

Checks:

```javascript
var a = generated({});
var b = generated({
    'position': {
        'start': {},
        'end': {}
    }
});
var c = generated({
    'position': {
        'start': {
            'line': 1,
            'column': 1
        },
        'end': {
            'line': 1,
            'column': 2
        }
    }
});
```

Yields:

```txt
a: true
b: true
c: false
```

## API

### `generated(node)`

Detect if [`node`][node] is [**generated**][spec].

**Parameters**:

*   `node` ([`Node`][node]) — Node to check.

**Returns**: Whether `node` is generated.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/unist-util-generated.svg

[build-page]: https://travis-ci.org/wooorm/unist-util-generated

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/unist-util-generated.svg

[coverage-page]: https://codecov.io/github/wooorm/unist-util-generated?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/unist-util-generated/releases

[license]: LICENSE

[author]: http://wooorm.com

[unist]: https://github.com/wooorm/unist

[node]: https://github.com/wooorm/unist#node

[spec]: https://github.com/wooorm/unist#location
