// Canonical runtime list: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
// Array order matters, newest (or most preferable) must always be at the top
// Runtimes still being tested out can be added, just not at runtimes[runtime][0]
let runtimes = {
  node: [
    'nodejs14.x',
    'nodejs12.x',
    'nodejs10.x',
  ],
  python: [
    'python3.9',
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
    'java11',
    'java8.al2',
    'java8',
  ],
  go: [
    'go1.x',
  ],
  dotnet: [
    'dotnetcore3.1',
    'dotnetcore2.1',
  ],
  custom: [
    'provided.al2',
    'provided',
  ],
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

// Add aliases after the other stuff populated to prevent dupes
runtimes.nodejs =       runtimes.node
runtimes['node.js'] =   runtimes.node
runtimes.py =           runtimes.python
runtimes.rb =           runtimes.ruby
runtimes.golang =       runtimes.go
runtimes['.net'] =      runtimes.dotnet

module.exports = {
  runtimes,
  runtimeList,
  runtimesByArchitecture,
  architecturesByRuntime,
}
