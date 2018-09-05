# ZURB WebApp Template Konstrukt version

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients. It has a Gulp-powered build system with these features:

We have used custom mixinis to enhance default Foundation settings, and edit it four our environment.

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 only, Tested with 6.11.4)
- [Git](https://git-scm.com/)

## Usage

We use gulp@4 for task management. We enhanced foundation, bu adding custom svg icons for arrows, +/- next, prev etc...
gulp-sassvg is responsible for those tasks

`app.scss`, `_settings.scss`, `_settingsCustom.scss` have to be overridden in order to use custom settings you wish. Also default svg should be replaced if you plan to use different icons.   