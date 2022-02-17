# Baldrick-codemod-ts

![npm](https://img.shields.io/npm/v/baldrick-codemod-ts) ![Build
status](https://github.com/flarebyte/baldrick-codemod-ts/actions/workflows/main.yml/badge.svg)
![npm bundle
size](https://img.shields.io/bundlephobia/min/baldrick-codemod-ts)

![npm type definitions](https://img.shields.io/npm/types/baldrick-codemod-ts)
![node-current](https://img.shields.io/node/v/baldrick-codemod-ts)
![NPM](https://img.shields.io/npm/l/baldrick-codemod-ts)

> Code modification and generation for typescript projects

The main motivation is to boost the development effort by providing ready
made snippets:

-   Snippets are written in Typescript, and have been unit tested.

-   Encourage a zero-dependency approach when the code needed does not
    justify importing a whole library.

-   Improve the consistency of the code.

You can run the generator in interactive mode by just typing:

```bash
baldrick-codemod-ts
```

It will ask for the snippet name, some parameters specific to the snippet and
a target file.

## Documentation and links

-   [Code Maintenance](MAINTENANCE.md)
-   [Code Of Conduct](CODE_OF_CONDUCT.md)
-   [Api for baldrick-codemod-ts](API.md)
-   [Contributing](CONTRIBUTING.md)
-   [Glossary](GLOSSARY.md)
-   [Diagram for the code base](INTERNAL.md)
-   [Vocabulary used in the code base](CODE_VOCABULARY.md)
-   [Contributors](https://github.com/flarebyte/baldrick-codemod-ts/graphs/contributors)
-   [Dependencies](https://github.com/flarebyte/baldrick-codemod-ts/network/dependencies)

## Installation

This package is [ESM
only](https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77).

```bash
yarn global add baldrick-codemod-ts
baldrick-codemod-ts --help
```

Or alternatively run it:

```bash
npx baldrick-codemod-ts --help
```

If you want to tun the latest version from github. Mostly useful for dev:

```bash
git clone git@github.com:flarebyte/baldrick-codemod-ts.git
yarn global add `pwd`
```
