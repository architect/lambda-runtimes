// Canonical runtime list: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
// Array order matters, newest (or most preferable) must always be at the top
// Runtimes still being tested out can be added, just not at runtimes[runtime][0]
let runtimes = {
  node: [
    'nodejs16.x',
    'nodejs18.x',
    'nodejs14.x',
  ],
  python: [
    'python3.9',
    'python3.8',
    'python3.7',
  ],
  ruby: [
    'ruby2.7',
  ],
  java: [
    'java11',
    'java8.al2',
    'java8',
  ],
  go: [
    'go1.x',
  ],
  dotnet: [
    'dotnet6',
    'dotnet5.0',
  ],
  custom: [
    'provided.al2',
    'provided',
  ],
}

let runtimeVersions = {
  'nodejs18.x': {
    runtime:  'node',
    major:    '18',
    minor:    null,
    patch:    null,
    wildcard: '18.*.*'
  },
  'nodejs16.x': {
    runtime:  'node',
    major:    '16',
    minor:    null,
    patch:    null,
    wildcard: '16.*.*'
  },
  'nodejs14.x': {
    runtime:  'node',
    major:    '14',
    minor:    null,
    patch:    null,
    wildcard: '14.*.*'
  },
  'python3.9': {
    runtime:  'python',
    major:    '3',
    minor:    '9',
    patch:    null,
    wildcard: '3.9.*',
  },
  'python3.8': {
    runtime:  'python',
    major:    '3',
    minor:    '8',
    patch:    null,
    wildcard: '3.8.*',
  },
  'python3.7': {
    runtime:  'python',
    major:    '3',
    minor:    '7',
    patch:    null,
    wildcard: '3.7.*',
  },
  'ruby2.7': {
    runtime:  'ruby',
    major:    '2',
    minor:    '7',
    patch:    null,
    wildcard: '2.7.*',
  },
  'java11': {
    runtime:  'java',
    major:    '11',
    minor:    null,
    patch:    null,
    wildcard: '11.*.*',
  },
  'java8.al2': {
    runtime:  'java',
    major:    '8',
    minor:    null,
    patch:    null,
    wildcard: '8.*.*',
  },
  'java8': {
    runtime:  'java',
    major:    '8',
    minor:    null,
    patch:    null,
    wildcard: '8.*.*',
  },
  'go1.x': {
    runtime:  'go',
    major:    '1',
    minor:    null,
    patch:    null,
    wildcard: '1.*.*',
  },
  'dotnet6': {
    runtime:  'dotnet',
    major:    '6',
    minor:    null,
    patch:    null,
    wildcard: '6.*',
  },
  'dotnet5.0': {
    runtime: 'dotnet',
    major: '5',
    minor: '0',
    patch: null,
    wildcard: '5.0.*',
  },
}

let runtimeList = Object.values(runtimes).reduce((a, b) => a.concat(b), [])

let runtimesByArchitecture = {
  arm64: [
    ...runtimes.node.slice(0, 2),
    ...runtimes.python.slice(0, 2),
    ...runtimes.ruby.slice(0, 1),
    ...runtimes.java.slice(0, 2),
    ...runtimes.dotnet.slice(0, 1),
    ...runtimes.custom.slice(0, 1),
  ],
  x86_64: [
    ...runtimes.node,
    ...runtimes.python,
    ...runtimes.ruby,
    ...runtimes.java,
    ...runtimes.go,
    ...runtimes.dotnet,
    ...runtimes.custom,
  ],
}

let architecturesByRuntime = {}
Object.values(runtimes).forEach(r => {
  r.forEach(runtime => {
    architecturesByRuntime[runtime] = []
    if (runtimesByArchitecture.arm64.includes(runtime)) {
      architecturesByRuntime[runtime].push('arm64')
    }
    if (runtimesByArchitecture.x86_64.includes(runtime)) {
      architecturesByRuntime[runtime].push('x86_64')
    }
  })
})

let aliases = {
  node:       'node',
  nodejs:     'node',
  'node.js':  'node',
  python:     'python',
  py:         'python',
  ruby:       'ruby',
  rb:         'ruby',
  java:       'java',
  go:         'go',
  golang:     'go',
  dotnet:     'dotnet',
  '.net':     'dotnet',
  custom:     'custom',
}

let retiredRuntimes = {
  node: [
    'nodejs12.x',
    'nodejs10.x',
    'nodejs8.10',
    'nodejs6.10',
    'nodejs4.3-edge',
    'nodejs4.3',
    'nodejs', // 0.10
  ],
  python: [
    'python3.6',
    'python2.7',
  ],
  ruby: [
    'ruby2.5',
  ],
  java: [],
  go: [],
  dotnet: [
    'dotnetcore3.1',
    'dotnetcore2.1',
    'dotnetcore2.0',
    'dotnetcore1.0',
  ],
  custom: [],
}

module.exports = {
  runtimes,
  runtimeVersions,
  runtimeList,
  runtimesByArchitecture,
  architecturesByRuntime,
  aliases,
  retiredRuntimes,
}
