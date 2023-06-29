import assert from 'node:assert/strict'
import test from 'node:test'
import {generated} from 'unist-util-generated'

test('generated', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('unist-util-generated')).sort(), [
      'generated'
    ])
  })

  await t.test('should not throw without node', async function () {
    assert.equal(generated(), true)
  })

  await t.test('should return false when with properties', async function () {
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
      false
    )
  })

  await t.test('should return true when without properties', async function () {
    assert.equal(
      generated({
        position: {start: {}, end: {}}
      }),
      true
    )
  })

  await t.test('should return true when without objects', async function () {
    assert.equal(generated({position: {}}), true)
  })

  await t.test('should return true when without position', async function () {
    assert.equal(generated({}), true)
  })
})
