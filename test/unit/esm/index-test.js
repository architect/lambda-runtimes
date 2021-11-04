import test from 'tape'
import lambdaRuntimes from '../../../esm/index.js'

test('Set up env', t => {
  t.plan(1)
  t.ok(lambdaRuntimes, 'lambdaRuntimes is present')
})

test('Exports', t => {
  t.plan(8)
  let {
    runtimes,
    runtimeVersions,
    runtimeList,
    runtimesByArchitecture,
    architecturesByRuntime,
    aliases,
    retiredRuntimes,
  } = lambdaRuntimes
  t.ok(runtimes, 'Got runtimes')
  t.ok(runtimeVersions, 'Got runtimeVersions')
  t.ok(runtimeList, 'Got runtimeList')
  t.ok(runtimesByArchitecture, 'Got runtimesByArchitecture')
  t.ok(architecturesByRuntime, 'Got architecturesByRuntime')
  t.ok(aliases, 'Got aliases')
  t.ok(retiredRuntimes, 'Got retiredRuntimes')
  t.equal(Object.keys(lambdaRuntimes).length, 7, 'Got all properties')
  console.dir(lambdaRuntimes, { depth: null })
})

test('runtimes semantics', t => {
  t.plan(1)
  let { runtimes } = lambdaRuntimes
  Object.values(runtimes).forEach(v => {
    if (!Array.isArray(v)) t.fail(`Expected an array: ${v}`)
  })
  t.pass('All runtimes values are arrays')
})

test('runtimeVersions semantics', t => {
  t.plan(2)
  let { runtimeList, runtimeVersions } = lambdaRuntimes
  let list = runtimeList.filter(r => !r.startsWith('provided'))
  list.forEach(runtime => {
    if (!runtimeVersions[runtime]) t.fail(`${runtime} not found in runtimeVersions`)
  })
  t.pass('Found all runtimeVersions')
  t.equal(list.length, Object.keys(runtimeVersions).length, 'Correct number of runtimeVersions found')
})

test('runtimeList semantics', t => {
  t.plan(1)
  let { runtimeList } = lambdaRuntimes
  t.ok(Array.isArray(runtimeList), 'runtimeList is an array')
})

test('runtimesByArchitecture semantics', t => {
  t.plan(1)
  let { runtimesByArchitecture } = lambdaRuntimes
  Object.values(runtimesByArchitecture).forEach(v => {
    if (!Array.isArray(v)) t.fail(`Expected an array: ${v}`)
  })
  t.pass('All runtimesByArchitecture are arrays')
})

test('architecturesByRuntime semantics', t => {
  t.plan(1)
  let { architecturesByRuntime } = lambdaRuntimes
  Object.values(architecturesByRuntime).forEach(v => {
    if (!Array.isArray(v)) t.fail(`Expected an array: ${v}`)
  })
  t.pass('All architecturesByRuntime are arrays')
})

test('aliases semantics', t => {
  t.plan(1)
  let { aliases } = lambdaRuntimes
  Object.values(aliases).forEach(v => {
    if (typeof v !== 'string') t.fail(`Expected a string: ${v}`)
  })
  t.pass('All aliases are strings')
})

test('retiredRuntimes semantics', t => {
  t.plan(1)
  let { retiredRuntimes } = lambdaRuntimes
  Object.values(retiredRuntimes).forEach(v => {
    if (!Array.isArray(v)) t.fail(`Expected an array: ${v}`)
  })
  t.pass('All retiredRuntimes are arrays')
})
