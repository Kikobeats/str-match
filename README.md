# str-match

![Last version](https://img.shields.io/github/tag/Kikobeats/str-match.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/str-match/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/str-match)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/str-match.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/str-match)
[![Dependency status](https://img.shields.io/david/Kikobeats/str-match.svg?style=flat-square)](https://david-dm.org/Kikobeats/str-match)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/str-match.svg?style=flat-square)](https://david-dm.org/Kikobeats/str-match#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/str-match.svg?style=flat-square)](https://www.npmjs.org/package/str-match)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> String matcher that output the input string replacing the match.

I created this module for be easy create a pipeline string processor, where the output of a pipe is the input of the next pipe.

## Install

```bash
$ npm install str-match --save
```

## Usage

```js
const strmatch = require('str-match')({ replacement: 'gift' })

const str = "I'm selling my Macbook Pro"
const regex = /selling/i
const detection = strmatch(str, regex)

console.log(detection)
// {
//  test: true,
//  match: 'Macbook Pro',
//  input: 'I\'m selling my Macbook Pro',
//  output: 'I\'m gift my Macbook Pro'
//  }
```

## API

### .constructor([opts])

#### opts

##### opts.flags

Type: `string`<br>
Default: `''`

##### opts.replacement

Type: `string`<br>
Default: `''`

### strmatch(str, regex)

#### str

*Required*<br>
Type: `string`

#### regex

*Required*<br>
Type: `regexp`

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
