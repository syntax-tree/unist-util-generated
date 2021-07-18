import test from 'tape'
import {generated} from './index.js'

test('generated', (t) => {
  t.equal(generated(), true, 'should not throw without node')

  t.equal(
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

  t.equal(
    generated({
      position: {start: {}, end: {}}
    }),
    true,
    'should return true when without properties'
  )

  t.equal(
    generated({position: {}}),
    true,
    'should return true when without objects'
  )

  t.equal(generated({}), true, 'should return true when without position')

  t.end()
})
