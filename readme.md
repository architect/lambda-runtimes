# AWS Lambda runtimes

## A list of officially AWS Lambda runtimes organized by name

### Installation

`npm i lambda-runtimes`

### Usage

```js
// esm
import {
  runtimes,
  runtimeVersions,
  runtimeList,
  runtimesByArchitecture,
  architecturesByRuntime,
  aliases,
  retiredRuntimes,
} from 'lambda-runtimes'
```

```js
// cjs
let {
  runtimes,
  runtimeVersions,
  runtimeList,
  runtimesByArchitecture,
  architecturesByRuntime,
  aliases,
  retiredRuntimes,
} = require('lambda-runtimes')
```

`lambda-runtimes` exports seven items:
- **`runtimes`** (object) - Lambda runtime strings, organized by runtime name
  - Example: `runtimes.node[0]` → `nodejs14.x`
  - Where appropriate, each runtime may include (lowcase normalized) aliases, e.g. `runtimes.node` === `runtimes.nodejs` === `runtimes.['node.js']`
- **`runtimeVersions`** (object) - Semver representations of each Lambda runtime
  - Example: `runtimeVersions['nodejs14.x']` returns an object with `major: '14'`, `minor: null`, `patch: null`, and `wildcard: '14.*.*'` properties
- **`runtimeList`** (array) - list of all Lambda runtime strings (order not necessarily guaranteed)
- **`runtimesByArchitecture`** (object) - list of Lambda runtimes supported by each CPU architecture
  - Example: `runtimesByArchitecture.arm64[0]` → `nodejs14.x`)
- **`architecturesByRuntime`** (object) - list of Lambda CPU architectures supported by each runtime
  - Example: `architecturesByRuntime['nodejs14.x']` → `[ 'arm64', 'x86_64' ]`)
- **`aliases`** (object) - shorthand or alternate names for runtime aliases (e.g. `py` for `python`)
- **`retiredRuntimes`** (object) - retired / EOL Lambda runtime strings, organized by runtime name
  - Example: `retiredRuntimes.node[0]` → `nodejs10.x`

Example:

```js
{
  runtimes: {
    node: [ 'nodejs14.x', 'nodejs12.x' ],
    ...
  },
  runtimeVersions: {
    'nodejs14.x': { major: '14', minor: null, patch: null, wildcard: '14.*.*' },
    ...
  },
  runtimeList: [ 'nodejs14.x', 'nodejs12.x', ... ],
  runtimesByArchitecture: {
    arm64: [ 'nodejs14.x', 'nodejs12.x', ... ],
    x86_64: [ 'nodejs14.x', 'nodejs12.x', ... ]
  },
  architecturesByRuntime: {
    'nodejs14.x': [ 'arm64', 'x86_64' ],
    'nodejs12.x': [ 'arm64', 'x86_64' ],
    ...
  },
  aliases: {
    nodejs: 'node',
    ...
  },
  retiredRuntimes: {
    node: [ 'nodejs10.x', ... ],
    ...
  },
}
```

### Resources

- [AWS Lambda runtimes list](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- [AWS Lambda runtime support policy](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html)
