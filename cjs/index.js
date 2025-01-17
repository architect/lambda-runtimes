// Canonical runtime list: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
// Array order matters, newest (or most preferable) must always be at the top
// Runtimes still being tested out can be added, just not at runtimes[runtime][0]
let runtimes = {
  node: [
    'nodejs20.x',
    'nodejs22.x',
    'nodejs18.x',
  ],
  python: [
    'python3.12',
    'python3.13',
    'python3.11',
    'python3.10',
    'python3.9',
  ],
  java: [
    'java21',
    'java17',
    'java11',
    'java8.al2',
  ],
  dotnet: [
    'dotnet8',
  ],
  ruby: [
    'ruby3.3',
    'ruby3.2',
  ],
  custom: [
    'provided.al2023',
    'provided.al2',
  ],
}

let runtimeVersions = {
  'nodejs22.x': {
    runtime:  'node',
    major:    '22',
    minor:    null,
    patch:    null,
    wildcard: '22.*.*'
  },
  'nodejs20.x': {
    runtime:  'node',
    major:    '20',
    minor:    null,
    patch:    null,
    wildcard: '20.*.*'
  },
  'nodejs18.x': {
    runtime:  'node',
    major:    '18',
    minor:    null,
    patch:    null,
    wildcard: '18.*.*'
  },
  'python3.13': {
    runtime:  'python',
    major:    '3',
    minor:    '13',
    patch:    null,
    wildcard: '3.13.*',
  },
  'python3.12': {
    runtime:  'python',
    major:    '3',
    minor:    '12',
    patch:    null,
    wildcard: '3.12.*',
  },
  'python3.11': {
    runtime:  'python',
    major:    '3',
    minor:    '11',
    patch:    null,
    wildcard: '3.11.*',
  },
  'python3.10': {
    runtime:  'python',
    major:    '3',
    minor:    '10',
    patch:    null,
    wildcard: '3.10.*',
  },
  'python3.9': {
    runtime:  'python',
    major:    '3',
    minor:    '9',
    patch:    null,
    wildcard: '3.9.*',
  },
  'java21': {
    runtime:  'java',
    major:    '21',
    minor:    null,
    patch:    null,
    wildcard: '21.*.*',
  },
  'java17': {
    runtime:  'java',
    major:    '17',
    minor:    null,
    patch:    null,
    wildcard: '17.*.*',
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
  'dotnet8': {
    runtime:  'dotnet',
    major:    '8',
    minor:    null,
    patch:    null,
    wildcard: '8.*',
  },
  'ruby3.3': {
    runtime:  'ruby',
    major:    '3',
    minor:    '3',
    patch:    null,
    wildcard: '3.3.*',
  },
  'ruby3.2': {
    runtime:  'ruby',
    major:    '3',
    minor:    '2',
    patch:    null,
    wildcard: '3.2.*',
  },
}

let runtimeList = Object.values(runtimes).reduce((a, b) => a.concat(b), [])

let runtimesByArchitecture = {
  arm64: [
    ...runtimes.node,
    ...runtimes.python,
    ...runtimes.java,
    ...runtimes.dotnet,
    ...runtimes.ruby,
    ...runtimes.custom,
  ],
  x86_64: [
    ...runtimes.node,
    ...runtimes.python,
    ...runtimes.ruby,
    ...runtimes.java,
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
  dotnet:     'dotnet',
  '.net':     'dotnet',
  custom:     'custom',
}

let retiredRuntimes = {
  node: [
    'nodejs16.x',
    'nodejs14.x',
    'nodejs12.x',
    'nodejs10.x',
    'nodejs8.10',
    'nodejs6.10',
    'nodejs4.3-edge',
    'nodejs4.3',
    'nodejs', // 0.10
  ],
  python: [
    'python3.8',
    'python3.7',
    'python3.6',
    'python2.7',
  ],
  ruby: [
    'ruby2.7',
    'ruby2.5',
  ],
  java: [
    'java8',
  ],
  go: [
    'go1.x',
  ],
  dotnet: [
    'dotnet7',
    'dotnet6',
    'dotnet5.0',
    'dotnetcore3.1',
    'dotnetcore2.1',
    'dotnetcore2.0',
    'dotnetcore1.0',
  ],
  custom: [],
  provided: [
    'provided',
  ],
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
