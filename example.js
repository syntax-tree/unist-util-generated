// Dependencies:
var generated = require('./index.js');

// Checks:
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

// Yields:
console.log('txt', ['a: ' + a, 'b: ' + b, 'c: ' + c].join('\n'));
