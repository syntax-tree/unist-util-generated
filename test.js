'use strict';

var test = require('tape');
var generated = require('./index.js');

test('generated', function (t) {
  t.equal(
    generated(),
    true,
    'should not throw without node'
  );

  t.equal(
    generated({
      position: {
        start: {
          line: 1,
          column: 1,
          indent: [],
          offset: 0
        },
        end: {
          line: 1,
          column: 2,
          indent: [],
          offset: 1
        }
      }
    }),
    false,
    'should return false when with properties'
  );

  t.equal(
    generated({
      position: {start: {}, end: {}}
    }),
    true,
    'should return true when without properties'
  );

  t.equal(
    generated({position: {}}),
    true,
    'should return true when without objects'
  );

  t.equal(
    generated({}),
    true,
    'should return true when without position'
  );

  t.end();
});
