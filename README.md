# cultsim-tooltip

![platform]
[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]

Cultist Simulator tooltip mod builder

## Overview

This utility parse [Cultist Simulator] gamefiles and build my tooltip mod.

Currently supports books & vaults tooltip.

You can download latest mod version from [here][release].

## Requirements

- [Node.js](https://nodejs.org)\
Minimum: **13.x**\
Recomended: **14.2** or later
- [Cultist Simulator] (Steam version)

## Install

```sh
npm i -g cultsim-tooltip
```

## Usage

```sh
cultsim-tooltip
```

Utility builds mod to `out/` in current working directory.

Choose mod language in **filtered_data.js** :

```js
export let locale = "en"; //en, ru, zh
```

[npm-badge]: https://badge.fury.io/js/cultsim-tooltip.svg
[npm-url]: https://badge.fury.io/js/cultsim-tooltip
[travis-badge]: https://api.travis-ci.org/mihael-stormrage/cultsim-tooltip.svg
[travis-url]: https://travis-ci.org/mihael-stormrage/cultsim-tooltip
[david-badge]: https://david-dm.org/mihael-stormrage/cultsim-tooltip.svg
[david-url]: https://david-dm.org/mihael-stormrage/cultsim-tooltip
[platform]: https://img.shields.io/badge/steam-windows-informational?logo=steam
[Cultist Simulator]: https://store.steampowered.com/app/718670/Cultist_Simulator/
[release]: https://github.com/mihael-stormrage/cultsim-tooltip/releases/latest