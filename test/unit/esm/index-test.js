import { test } from 'node:test'
import assert from 'node:assert'
import lambdaRuntimes from '../../../esm/index.js'

test('Set up env', () => {
  assert.ok(lambdaRuntimes, 'lambdaRuntimes is present')
})

test('Exports', () => {
  let {
    runtimes,
    runtimeVersions,
    runtimeList,
    runtimesByArchitecture,
    architecturesByRuntime,
    aliases,
    retiredRuntimes,
  } = lambdaRuntimes
  assert.ok(runtimes, 'Got runtimes')
  assert.ok(runtimeVersions, 'Got runtimeVersions')
  assert.ok(runtimeList, 'Got runtimeList')
  assert.ok(runtimesByArchitecture, 'Got runtimesByArchitecture')
  assert.ok(architecturesByRuntime, 'Got architecturesByRuntime')
  assert.ok(aliases, 'Got aliases')
  assert.ok(retiredRuntimes, 'Got retiredRuntimes')
  assert.equal(Object.keys(lambdaRuntimes).length, 7, 'Got all properties')
  console.dir(lambdaRuntimes, { depth: null })
})

test('runtimes semantics', () => {
  let { runtimes } = lambdaRuntimes
  Object.values(runtimes).forEach(v => {
    assert.ok(Array.isArray(v), `Expected an array: ${v}`)
  })
})

test('runtimeVersions semantics', () => {
  let { runtimeList, runtimeVersions } = lambdaRuntimes
  let list = runtimeList.filter(r => !r.startsWith('provided'))
  list.forEach(runtime => {
    assert.ok(runtimeVersions[runtime], `${runtime} not found in runtimeVersions`)
  })
  assert.equal(list.length, Object.keys(runtimeVersions).length, 'Correct number of runtimeVersions found')
})

test('runtimeList semantics', () => {
  let { runtimeList } = lambdaRuntimes
  assert.ok(Array.isArray(runtimeList), 'runtimeList is an array')
})

test('runtimesByArchitecture semantics', () => {
  let { runtimesByArchitecture } = lambdaRuntimes
  Object.values(runtimesByArchitecture).forEach(v => {
    assert.ok(Array.isArray(v), `Expected an array: ${v}`)
  })
})

test('architecturesByRuntime semantics', () => {
  let { architecturesByRuntime } = lambdaRuntimes
  Object.values(architecturesByRuntime).forEach(v => {
    assert.ok(Array.isArray(v), `Expected an array: ${v}`)
  })
})

test('aliases semantics', () => {
  let { aliases } = lambdaRuntimes
  Object.values(aliases).forEach(v => {
    assert.equal(typeof v, 'string', `Expected a string: ${v}`)
  })
})

test('retiredRuntimes semantics', () => {
  let { retiredRuntimes } = lambdaRuntimes
  Object.values(retiredRuntimes).forEach(v => {
    assert.ok(Array.isArray(v), `Expected an array: ${v}`)
  })
})
