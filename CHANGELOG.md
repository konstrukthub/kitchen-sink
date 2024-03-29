# Changelog
## Version 2.4.0 (November 22, 2021)
Update Foundation to 6.7.4
Fix security issues
update jquery to 3.6
update security issues with 3rd party

## Version 2.3.1 (January 17, 2021)
fix _customForms.scss border radius issue with input-form-group

## Version 2.3.0 (July 25, 2020)
Update disabled states for radio and checkbox buttons.
Added now settings to `custom_settings.scss` with `$disabled-checkbox-icons` map
Added to `assets/svg/icons`:
 - icon-checkbox-disabled-8.svg
 - icon-checkbox-disabled-16.svg
 - icon-radio-disabled-8.svg
 - icon-radio-disabled-16.svg

## Version 2.2.4 (July 25, 2020)
Security update dev dependencies

## Version 2.2.3 (July 25, 2020)
Security update dependencies

## Version 2.2.2 (December 22, 2019)
Fixed button sizes on button-group

## Version 2.2.1 (December 15, 2019)
Foundation version 6.6.1
Fixed custom buttons disabled mixin

## Version 2.2.0 (November 26, 2019)
Responsive expanded buttons added

## Version 2.1.2 (October 28, 2019)
unquote px in custom-spacings, added padding

## Version 2.1.1 (October 11, 2019)
update `cross-env` dev dependency to V6

## Version 2.1.0 (October 11, 2019)
Added `@mixin custom-margins` to customSpacings, included `@include custom-margins;` in `app.css` and added new settings to `_settingsCustom.scss`

## Version 2.0.0 (October 1, 2019)

Completely removed gulp. Switched to webpack + node.js
Added svg sprites instead of datauri svgs
Refactored scss mixins to use sprites
SCSS settings:
 - `_settingsCustom.scss` : 
    - removed accordion bg icons settings
    - `$square-button-icons` added hover, removed color and hover-color properties
    - removed `$button-icons-color` and `$button-icons-hover-color` variables   
- added `inline-*.svg` icons for data-uri images, generated via node
- updated template

## Version 1.2.0 (September 13, 2019)

Added del instead of rimraf
`config.yml` updated with `PATHS.clear`
Updated `jQuery` to `3.4.1`

## Version 1.1.0 (September 5, 2019)

Added custom spacings settings
Updated basic settings:
 - removed margins from headings by default
 
## Version 1.0.1 (May 30, 2019)

Update Foundation to 6.5.3
Minor style edits

## Version 1.0 (November 19, 2015)

Initial release.
