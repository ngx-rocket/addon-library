### WIP: this add-on has not been published yet

# :rocket: generator-addon-library

[![NPM version](https://img.shields.io/npm/v/generator-addon-library.svg)](https://www.npmjs.com/package/generator-addon-library)
[![Build status](https://img.shields.io/travis/ngx-rocket/addon-library/master.svg)](https://travis-ci.org/ngx-rocket/addon-library)
![Node version](https://img.shields.io/node/v/generator-addon-library.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Create Angular component library with ngX-Rocket

This add-on integrates [ng-packagr](https://github.com/dherges/ng-packagr) within your project, so you can create one
(or many) component library directly from you app components, to share with your other projects.

If your initial goal is to create a component library and not an app, this generator also helps you by providing an app
testing ground for your library, that can also be deployed as a demo of your library.

# Installation

Install [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket) and this add-on:

```sh
npm install -g generator-ngx-rocket generator-addon-library
```

# Usage

1. Generate a new project and follow instructions:
   ```sh
   ngx new
   ```

2. Build your component library:
   ```sh
   npm run build:library
   ```

See [ngX-Rocket CLI](https://github.com/generator-ngx-rocket/tree/master/cli) for more information.

# Creating your library

Here is a quickstart for creating your library from the generated code, see
[ng-packagr](https://github.com/dherges/ng-packagr) for the full documentation.

Your library package file is `lib/package.json`, and your components entry point is `lib/public_api.ts`.

By running the `build:library` task a folder `dist/lib` will be created, containing your library package ready for
testing or publishing.

## Adding components

Edit `lib/public_api.ts` to define the modules from your app you want to export as a library.

> Make sure those modules are standalone and do not depends on parts of your app that you do not want to be exported,
> or your library bundle may become bigger than expected. 

## Testing


## Publishing


# License

[MIT](LICENSE)
