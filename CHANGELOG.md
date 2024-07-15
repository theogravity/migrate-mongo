# Changelog

## 12.0.3

- [@sam-myers](https://github.com/sam-myers): Fix bug where an empty oplog would cause a crash when printing

## 12.0.2

Readme update to say node 18 is required.

## 12.0.1

Added a modification of @prashantswami PR [Replace Lodash with Smaller Modular Packages for Improved Performance and to remove security vulnerabilities](https://github.com/seppevs/migrate-mongo/pull/447) replaces the lone `lodash` dependency with smaller, more focused packages
 to also address security issues.

## 12.0.0

- Rebased against the repo that this project is forked from, [`seppevs/migrate-mongo`](migrate-mongo)
  * Rebase is against v11.0.0
  * Includes support for Mongo 7
- [@sam-myers](https://github.com/sam-myers): Add oplog logging to print oplog timestamps, which is useful for MongoDB Atlas point-in-time restores. In the event of a faulty migration, this will allow restoration of the database to the exact last possible moment via the Atlas UI.

**Breaking Changes**

- Node 18 is now the baseline engine

## 11.1.0

Added a modification of @bdcorps PR [Add custom migration file option to up](https://github.com/seppevs/migrate-mongo/pull/251) which adds the `--migration-file`
flag to the `up` and `down` commands allowing you to specify a single migration file to run out-of-band.

See README.md in the `up` and `down` sections for usage info.

## 11.0.1

Fix bug where you cannot create a migration if you did not have the config option `moduleSystem` defined.

By default `moduleSystem` is `commonjs`.

## 11.0.0

- Rebased against the repo that this project is forked from, [`seppevs/migrate-mongo`](https://github.com/seppevs/migrate-mongo)
  * This mainly adds ESM support

Breaking:

- Moves the `mongodb` dependency to a peer dependency, and `mongodb` is no longer included with this package

## 10.2.0

- For `migrationFileExtension` using a value of `.ts`, a typescript template file will be used that comes with proper types

## 10.1.0

- Add [soft locks PR](https://github.com/seppevs/migrate-mongo/pull/262) to prevent multiple migration execution by @daveboulard

## 10.0.1

Update readme, docs in the samples dir

## 10.0.0

**breaking change**: 

- The `callback` parameter is no longer supported and has been removed.
- The baseline `node` engine is `>=12` from `>=8`

**new**: 

- A `context` function can now be specified in the config that will pass context 
data to each migration execution as the third parameter. See readme for more details.

## 9.0.3

Update `package.json` repo url

## 9.0.2

Update the readme to include a URL to the mongo driver options

## 9.0.1

Update dependencies to latest versions where possible and address `npm audit` issues.

## 9.0.0

- Update `mongodb` to 4.3.0

Applied the following PRs from the `seppevs/migrate-mongo` project:

- @Maximusya [`docs: added '{session}' options to Transactions API samples #393`](https://github.com/seppevs/migrate-mongo/pull/393)
- @Kuzzy [`Extend config for tuning migrations DB records #394`](https://github.com/seppevs/migrate-mongo/pull/394)
- @kabalin [`Fix up/down command console output when logger replaces it.`](https://github.com/seppevs/migrate-mongo/pull/365)
