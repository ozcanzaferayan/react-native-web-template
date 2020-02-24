# React Native Web Template

> React Native template project for creating iOS, Android and Web apps

<!-- [![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url] -->

With this monorepo project, you can develop mobile & web projects with React Native and React Native Web. You can check this Turkish blog about how this project developed.

![](https://github.com/ozcanzaferayan/react-native-web-template/blob/master/art/banner.jpg?raw=true)

## How this template created?

You can check out this Turkish [Github blog post](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

## Usage

### OS X:

```sh
yarn install
cd packages/mobile
npm install -g wml
wml add ../common ./node_modules/@monorepo/common
open . -a iterm && wml start
open . -a iterm && cd ../common && yarn watch
open . -a iterm && cd ../mobile/ios && pod install && cd ../ && npx react-native run-ios -- --reset-cache
open . -a iterm && cd ../web && yarn start
cd ../../ && code .
```

### Windows:    
Notes:  
* wml is not working on windows so you can use Grunt instead of wml.
* iterm is not exist in windows. Therefore you can use cmder instead of iterm.
* Cmder has no duplicate tab command. So you can duplicate tabs manually by right clicking current tab and selecting "Restart or duplicate" > "Duplicate root"

```sh
yarn install && cd packages/common && npm install grunt --save-dev && npm install grunt-contrib-watch --save-dev && npm install grunt-sync --save && grunt --watch
# Duplicate tab
cd ../common && yarn watch
# Duplicate tab
cd ../mobile && npx react-native run-android -- --reset-cache
# Duplicate tab
cd ../web && yarn start
# Duplicate tab
code .
```

## Adding library to common module
If you added library to common module like react-native-svg, you have to add that library into mobile package. And nohoist array.

```json
{
  "name": "mobile",
  "workspaces": {
    "nohoist": [
      "react-native",
      "react-native/**",
      "react-native-svg",
      "react-native-svg/**"
    ]
  },
  "dependencies": {
    "react": "16.8.6",
    "react-native": "0.60.5",
    "react-native-svg": "^11.0.1"
  }
}

```

## Development setup

For development, you should install these CLI tools:

- Node ^8.11
- npm ^6.2.0
- yarn ^1.22.0
- wml

## Release History

<!-- * 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!) -->

- 0.1.0
  - The first proper release
  - ADD: Add project files

## Meta

Zafer AYAN – [@ZaferAyan](https://twitter.com/ZaferAyan) – [ozcanzaferayan@gmail.com]()

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/ozcanzaferayan/react-native-web-template]()

## Contributing

1. Fork it (<https://github.com/ozcanzaferayan/react-native-web-template>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki -->
