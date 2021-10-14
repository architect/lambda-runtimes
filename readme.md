# AWS Lambda runtimes

## A list of officially AWS Lambda runtimes organized by name

### Installation

`npm i lambda-runtimes`


### Usage

```js
// esm
import {
  runtimes,
  runtimeList,
  runtimesByArchitecture,
  architecturesByRuntime,
  retiredRuntimes,
} from 'lambda-runtimes'
```

```js
// cjs
let {
  runtimes,
  runtimeList,
  runtimesByArchitecture,
  architecturesByRuntime,
  retiredRuntimes,
} = require('lambda-runtimes')
```

`lambda-runtimes` exports five items:
- **`runtimes`** (object) - Lambda runtime strings, organized by runtime name
  - Example: `runtimes.node[0]` → `nodejs14.x`
  - Where appropriate, each runtime may include (lowcase normalized) aliases, e.g. `runtimes.node` === `runtimes.nodejs` === `runtimes.['node.js']`
- **`runtimeList`** (array) - list of all Lambda runtime strings (order not necessarily guaranteed)
- **`runtimesByArchitecture`** (object) - list of Lambda runtimes supported by each CPU architecture
  - Example: `runtimesByArchitecture.arm64[0]` → `nodejs14.x`)
- **`architecturesByRuntime`** (object) - list of Lambda CPU architectures supported by each runtime
  - Example: `architecturesByRuntime['nodejs14.x']` → `[ 'arm64', 'x86_64' ]`)
- **`retiredRuntimes`** (object) - retired / EOL Lambda runtime strings, organized by runtime name
  - Example: `retiredRuntimes.node[0]` → `nodejs10.x`

Example:

```js
{
  runtimes: {
    node: [ 'nodejs14.x', 'nodejs12.x' ],
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
  retiredRuntimes: {
    node: [ 'nodejs10.x', ... ],
    ...
  },
}
```

### Resources

- [AWS Lambda runtimes list](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- [AWS Lambda runtime support policy](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html)
