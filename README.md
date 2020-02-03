# Free Press Browser Extension

[![Latest Version][img-version]][link-version]
[![Build Status][img-travis]][link-travis]
[![Code Coverage][img-coveralls]][link-coveralls]
[![Open in Gitpod][img-gitpod]][link-gitpod]

Browser extension to read online newspapers for free.

## Supported Websites

- [Bloomberg](https://www.bloomberg.com)
- [Business Insider](https://www.businessinsider.com)
- [Forbes](https://www.forbes.com)

## Install

```bash
git clone https://github.com/edouardhienrichs/free-press.git
cd free-press
yarn
yarn build
```

Then load the `/dist` directory in your browser as an unpacked extension.

## Contribute

### Get Started

```bash
yarn
yarn dev
```

Then load the `/dist` directory in your browser as an unpacked extension.

### Release

```bash
npm version [MINOR|PATCH]
```

1. The new Git tag will be pushed to Github.
2. Travis CI will test, build and publish the new release.

---

[img-coveralls]: https://img.shields.io/coveralls/github/edouardhienrichs/free-press/master?style=flat-square
[img-gitpod]: https://img.shields.io/badge/Gitpod-ready_to_code-blue?logo=gitpod&style=flat-square
[img-travis]: https://img.shields.io/travis/com/edouardhienrichs/free-press/master?style=flat-square
[img-version]: https://img.shields.io/github/package-json/v/edouardhienrichs/free-press?style=flat-square

[link-coveralls]: https://coveralls.io/github/edouardhienrichs/free-press
[link-gitpod]: https://gitpod.io/from-referrer/
[link-license]: https://github.com/edouardhienrichs/free-press/blob/master/LICENSE
[link-travis]: https://travis-ci.com/edouardhienrichs/free-press
[link-version]: https://github.com/edouardhienrichs/free-press/releases
