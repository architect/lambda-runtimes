# `lambda-runtimes` changelog

---

## [2.0.0] 2024-01-23

### Added

- Added `python3.12`


### Changed

- Breaking change: updated default runtimes for Node.js, Python
  - Node.js: `nodejs20.x`
  - Python: `python3.12`

---

## [1.1.7] 2023-12-13

### Added

- Retired `nodejs14.x` (deprecated 2023-11-27)
- Retired `python3.7` (deprecated 2023-11-27)
- Retired `ruby2.7` (deprecated 2023-12-07)
  - Default is now `ruby3.2`

---

## [1.1.6] 2023-11-15

### Added

- Added `nodejs20.x`
- Added `provided.al2023`

---

## [1.1.5] 2023-08-21

### Added

- Added `python3.10` and `python3.11`
  - Default remains `python3.9`
- Added `java17`
  - Default remains `java11`
- Added `ruby3.2`
  - Default remains `ruby2.7`
- Added `dontnet7`
  - Default remains `dotnet6`

### Changed

- Retired `dotnet5.0` (deprecated 2022-05-10)
- Re-ordered `runtimeVersions` to match Amazon's doc order

---

## [1.1.4] 2023-04-05

### Changed

- Retired `nodejs12.x` (deprecated 2023-03-31), `dotnetcore3.1` (deprecated 2023-04-03)

---

## [1.1.3] 2022-11-18

### Added

- Added `nodejs18.x`
- Added `dotnet5.0` and `dotnet6`


### Changed

- `nodejs16.x` is now the default Node.js runtime
- Retired `python3.6`

---

## [1.1.2] 2022-05-09

### Added

- Add `nodejs16.x`

---

## [1.1.1] 2021-11-17

### Added

- Add `runtime` property with runtime name to runtime version metadata (`runtimeVersions`)

---

## [1.1.0] 2021-11-04

### Added

- Added runtime version metadata (`runtimeVersions`) to help smooth out the funky ways AWS represents Lambda runtime versions (variable minor: `nodejs14.x`, known-minor: `python3.9`, major-only: `java11`)

---

## [1.0.1] 2021-10-19

### Added

- Added (internally-)canonical runtime names to alias list

---

## [1.0.0] 2021-10-18

Hello!

---
