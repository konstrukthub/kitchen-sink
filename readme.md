# ZURB WebApp Template Konstrukt version - No GULP

[![npm version](https://badge.fury.io/js/foundation-konstrukt.svg)](https://badge.fury.io/js/foundation-konstrukt)
[![GitHub version](https://badge.fury.io/gh/konstrukthub%2Fkitchen-sink.svg)](https://badge.fury.io/gh/konstrukthub%2Fkitchen-sink)

[![dependency Status](https://david-dm.org/konstrukthub/kitchen-sink/status.svg)](https://david-dm.org/konstrukthub/kitchen-sink#info=dependencies)
[![devDependency Status](https://david-dm.org/konstrukthub/kitchen-sink/dev-status.svg)](https://david-dm.org/konstrukthub/kitchen-sink#info=devDependencies)

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients.

We have used custom mixinis to enhance default Foundation settings, and edit it four our environment, as well as benefits of webpack to wrap it up

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 10 >, Tested with 10.16.0)
- [Git](https://git-scm.com/)

## Usage

We use webpack for task management. We enhanced foundation, bu adding custom svg icons for arrows, +/- next, prev etc...
sassvg is responsible for those tasks

`app.scss`, `_settings.scss`, `_settingsCustom.scss` have to be overridden in order to use custom settings you wish. Also default svg should be replaced if you plan to use different icons.   
