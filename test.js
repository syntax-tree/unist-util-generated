import assert from 'node:assert/strict'
import test from 'node:test'
import {generated} from './index.js'

test('generated', () => {
  assert.equal(generated(), true, 'should not throw without node')

  assert.equal(
    generated({
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 2,
          offset: 1
        }
      }
    }),
    false,
    'should return false when with properties'
  )

  assert.equal(
    generated({
      position: {start: {}, end: {}}
    }),
    true,
    'should return true when without properties'
  )

  assert.equal(
    generated({position: {}}),
    true,
    'should return true when without objects'
  )

  assert.equal(generated({}), true, 'should return true when without position')
})
