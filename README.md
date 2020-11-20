![](https://img.shields.io/github/package-json/v/kaskadi/template-kaskadi-element)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/template-kaskadi-element?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/template-kaskadi-element/example/index.html)

**GitHub Actions workflows status**

[![Build status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/build?label=build&logo=mocha)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Abuild)
[![BuildFF status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/build-on-firefox?label=firefox&logo=firefox-browser)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Abuild-on-firefox)
[![BuildChrome status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/build-on-chrome?label=chrome&logo=google-chrome&logoColor=white)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Abuild-on-chrome)
[![Publish status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/publish?label=publish&logo=Amazon%20AWS)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Apublish)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/template-kaskadi-element?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-element)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/template-kaskadi-element?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-element)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/template-kaskadi-element?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-element)

<!-- You can add badges inside of this section if you'd like -->

****

# Repository initialization

When creating a repository from this template an `init` workflow (see [here](./.github/workflows/init.yml)) will run. This workflow uses [`kaskadi-cli`](https://www.npmjs.com/package/kaskadi-cli) in order to properly initialize your repository by:
- updating the names refering to the template in relevant files (for example `package.json`, `package-lock.json`, etc.) and renaming some files if need be
- automatically adding your repository to _Code Climate_
- automatically setting `REPORTER_ID` secret inside of your repository for test coverage upload to _Code Climate_. This may fail because of _Code Climate_ infrastructure latency in setting up your repository. In such case your workflow will emit a warning telling you to set `REPORTER_ID` manually.

# Testing

`mocha`, `chai`, `standard` & `karma` are available as dev dependencies.

A `build` workflow (see [here](./.github/workflows/build.yml)) along with individual [`build-on-chrome`](./.github/workflows/buildChrome.yml) and [`build-on-firefox`](./.github/workflows/buildFF.yml) workflows are running on `pull request` and will execute your test suite before allowing you to merge your PR. It also has a `coverage` job already prepared that you can comment out as soon as your testing is in place and your `REPORTER_ID` is in the repository secrets. This is the ID on _Code Climate_ used for uploading code coverage reports.

Beside running your unit tests, this workflow also runs a static code analysis to find any vulnerability in your code. If a vulnerability is found, a notification will appear in the `Security` tab of your repository.

****

# Documentation

This repository comes with a `generate-docs` workflow that generates documentation automatically for you using [`JSDOC`](https://jsdoc.app/). It'll check the element's file (found in the `main` field of `package.json`) for `JSDOC`-like comments in order to build its documentation. It also checks for any CSS custom variables and lists them in the documentation. See [here](https://github.com/kaskadi/action-generate-docs) and [there](./serverless.yml) for more information.

If you would like to see the workflow configuration, head [here](./.github/workflows/generate-docs.yml).

You can configure the template used to generate the action documentation [here](./docs/template.md).

****

# Publishing

Publishing to CDN is done automatically via a `publish` workflow (see [here](./.github/workflows/publish.yml)). This workflow will run on `push`. It uses our internal action `action-s3cp` and a `kaskadi.s3-push` configuration field in `package.json`. See [here](https://github.com/kaskadi/action-s3cp) for more details on how to use this action.

Before publishing, this workflow runs a static code analysis to find any vulnerability in your code. If a vulnerability is found, a notification will appear in the `Security` tab of your repository.

The workflow will also run your unit tests in order to catch any bugs that could be introduced via hotfixes.

****

<!-- automatically generated documentation will be placed in here -->
# Usage instructions

In another element:
```js
// using the latest version
import 'https://cdn.klimapartner.net/modules/@kaskadi/template-kaskadi-element/template-kaskadi-element.js'
// using a specific version
import 'https://cdn.klimapartner.net/modules/@kaskadi/template-kaskadi-element/release/v1.0.0/template-kaskadi-element.js'
```

In the browser:
```html
<!-- using the latest version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/template-kaskadi-element/template-kaskadi-element.js"></script>
<!-- using a specific version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/template-kaskadi-element/release/v1.0.0/template-kaskadi-element.js"></script>
```

# Custom element documentation

## template-kaskadi-element

Template element for the Kaskadi application.

This is intended to be used as base for building other `lit-element` components from it.

This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation].


| Param | Type | Description |
| --- | --- | --- |
| \[phrase\] | `string` | set of localized phrases that can be used for localization via our `translate` and `lang` module. This is a stringified object containing language as key (`en`, `de`, etc.) and the corresponding phrase as value. |

**Example**  
```html
<template-kaskadi-element phrase="${JSON.stringify({ en: 'Hello', de: 'Hallo', fr: 'Bonjour' })}"></template-kaskadi-element>
```
<!-- LINKS -->

[`KaskadiElement` documentation]:https://github.com/kaskadi/kaskadi-element

## Custom styles

No custom CSS properties found in this element.
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->