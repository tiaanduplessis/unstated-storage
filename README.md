
# unstated-storage
[![package version](https://img.shields.io/npm/v/unstated-storage.svg?style=flat-square)](https://npmjs.org/package/unstated-storage)
[![package downloads](https://img.shields.io/npm/dm/unstated-storage.svg?style=flat-square)](https://npmjs.org/package/unstated-storage)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/unstated-storage.svg?style=flat-square)](https://npmjs.org/package/unstated-storage)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Persist your unstated container in local or session storage

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install unstated-storage
$ # OR
$ yarn add unstated-storage
```

## Usage

```js
import { StoredContainer } from 'unstated-storage' 

class Example extends StoredContainer {
    state = {
        count: 0
    }

    store = {
        version: 1, // Check for matching version in storage to populate
                    // If omitted, will just call setState with state at key
        storage: window.sessionStorage,
        key: 'example'
    }

    increment () {
        this.setState(currentState = ({...currentState, count: ++currentState.count}))
    }
}

export default Example
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    