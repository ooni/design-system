# ChangeLog

## ooni-components 0.5.0-alpha.2 [2022-07-27]

Changes:

* `icons` have been migrated to a private module

Breaking changes:

* Import statement of `icons` have been changed. The working one is `"ooni-components/icons"`.

## ooni-components 0.5.0-alpha.1 [2022-07-25]

* Identical to `v0.5.0-alpha.0`

## ooni-components 0.5.0-alpha.0 [2022-07-25]

Adds:

* Rollup bundler to the applicaton
* Typescript support - `v4.7.4`
* Styleguide and Eslint support

Changes:

* All components have been migrated to Typescript
* New unit testing with @testing-library/react
* Storybook in a more structured way

Breaking changes:

* Import statement of `svgs` and `animations` have been changed. \
  The working ones are `"ooni-components/svgs/logos/abc.svg"` and `"ooni-components/animations/abc.json"`
* Uninstall `rebass` and `@rebass/forms` from the deps as it's coming from design-system and might break things due to version conflicts.

Dependency changes:

* Storybook upgraded from `v5.x.x` to `v6.x.x`
* `@rebass/preset`, `emotion-theming`, `palx`, `prop-types`, `react`, `react-dom`, `react-icons`, `styled-components`, `styled-system`, `victory` have been removed from the **dependencies**
* `@rebass/forms`, `react`, `react-dom`, `rebass`, `styled-components` have been added as **peer-dependencies**

## ooni-components 0.4.6 [2021-04-08]
Fixes:
* Remove default outline around buttons

## ooni-components 0.4.5 [2021-03-30]
Fixes:
* Fix bug in CI script that populated `dist/` incorrectly before publishing to npm
* Security fixes in dependency versions suggested by Github security advisories (#113)

## ooni-components 0.4.4 [2021-03-29]
Fixes:
* Fixed how props are passed down from Modal to Box with content (#112)

## ooni-components 0.4.3 [2021-03-26]
* No-op version bump to trigger CI

## ooni-components 0.4.2 [2021-03-26]
Adds:
* Added icons for Signal and RiseupVPN tests
* CI script publishes to npm registry directly when version number is changed

Changes:
* Upgraded to `styled-components` to v5
* Upgraded `react-icons` to latest. More icons to choose from.
* Default Link color to `blue6` (Thanks @Eddges!)

Fixes:
* Modal component is now usable again
* Security fixes in dependency versions suggested by Github security advisories

## ooni-components 0.4.1 [2020-12-01]
Fixes:
* Restore disabled state sytling to buttons
* Security fixes in dependency versions suggested by Github security advisories

## ooni-components 0.4.0 [2020-08-27]
Changes
* **BREAKING** Uses rebass@^4.0.0 and styled-system@^5.1.5
* Most components have been refactored to use rebass' `variants` feature

Security
* Bumped versions for `websocket-extensions`, `lodash`, `elliptic` (@dependabot)

## ooni-components 0.3.2 [2020-04-20]
Fixes:
* Fixed circumvention test group icon spacing

## ooni-components 0.3.1 [2020-03-18]
Adds:
* Animation for Circumvention test group

## ooni-components 0.3.0 [2020-01-27]
Adds:
* Icon for `tor` test

Changes:
* **BREAKING** Supports styled-components@^4.0.0
* Fixed `psiphon` test icon

Removed:
* Dropped misspelt color `fuschia`. Use `fuchsia`

## ooni-components 0.2.11 [2019-12-16]
Adds:
* Add `<Link>` component styled with OONI theme
* Add icon for circumvention test group

Changes:
* dependency upgrades by dependabot #65 #66 #69 #71

Fixes:
* Security fixes in dependency versions suggested by Github security advisories

## ooni-components 0.2.10 [2019-12-03]
Adds:

* Add `fontWeight` prop to `Text` component

## ooni-components 0.2.9 [2019-07-25]
Adds:

* Add icon for Vanilla Tor circumvention test

## ooni-components 0.2.8 [2019-06-20]
Adds:

* Add disbaled state styles to `Button`

## ooni-components 0.2.7 [2019-06-18]
Adds:

* Include animations in package builds
* Add `fsevents` as optional dependency

## ooni-components 0.2.6 [2019-05-29]
Fixes:

* Fix component type comparison in dev mode with HMR enabled

## ooni-components 0.2.5 [2019-03-22]
Changes:

* Use the custom `Container` in `Hero`

## ooni-components 0.2.4 [2019-03-11]
Changes:

* Use responsive maxWidths for `Container`
* Change button fonts to 'Title Case'
* Stop focus events on Input from affecting position of other elements
* Upgrade babel, storybook, and testing tools dependencies

## ooni-components 0.2.3 [2018-12-15]
Adds:

* Travis CI configuration to run tests

## ooni-components 0.2.2 [2018-12-15]
Changes:

* Font definitions structure in Theme as per new rebass spec

## ooni-components 0.2.1 [2018-10-16]
Changes:

* Publish only the necessary files to npm registry

## ooni-components 0.2.0 [2018-10-16]

Changes:

* Upgraded `styled-components`, `rebass`, `grid-styled` (now `@rebass/grid`) to latest stable versions
* `fontSizeMult` is now deprecated
* Uses `flexWrap` prop instead of `flex`

Adds:

* Unit tests for all components with Jest Snapshot Testing

Fixes:

* Click handler for `Modal`
* Responsive breakpoints in rebass theme

## ooni-components 0.1.4 [2018-09-11]

Changes:

* Update icons for URL categories HATE and MILX


## ooni-components 0.1.3 [2018-07-26]

Fixes:

* Broken svgs

## ooni-components 0.1.2 [2018-07-26]

Adds:

* Tick & Cross icons

## ooni-components 0.1.1 [2018-07-23]

Adds:

* Custom icons
* Bodymovin animations

Changes:

* Card now acts clickable only when it has onClick bound to it

## ooni-components 0.1.0 [2018-06-20]

Adds:

* Select component
* Storybook interactive preview

Changes:

* Color palette
* Migrate the source from ooni/design to ooni/design-system

## ooni-components 0.1.0-rc.3 [2018-01-25]

Fixes:

* Pin more versions and use babel-plugin-styled-components

## ooni-components 0.1.0-rc.2 [2018-01-25]

Fixes:

* Invert black with white

## ooni-components 0.1.0-rc.1 [2018-01-25]

Changes:

* New and improved color palette

Fixes:

* Pin styled-components version

## ooni-components 0.1.0-beta.7 [2017-10-24]

Adds:
* Card component
* inverted and hollow Button component props

## ooni-components 0.1.0-beta.6 [2017-09-21]

Changes:
* Add -1px letter-spacing to Light headers

## ooni-components 0.1.0-beta.5 [2017-09-21]

Fixes:
* Bug in Button and Input

## ooni-components 0.1.0-beta.4 [2017-09-21]

Fixes:
* Bug in Button

## ooni-components 0.1.0-beta.3 [2017-09-21]

Changed:
* Remove responsiveness from Button

## ooni-components 0.1.0-beta.2 [2017-09-20]

Changed:
* Remove container from Modal

## ooni-components 0.1.0-beta.1 [2017-09-20]

Added:
* Modal organism

## ooni-components 0.1.0-alpha.15 [2017-09-20]

Changed:
* Sizes of Button, Input, Radio

## ooni-components 0.1.0-alpha.14 [2017-09-20]

Changed:
* Improvements to typography
* Improvements to buttons

## ooni-components 0.1.0-alpha.13 [2017-09-19]

Changed:
* Better support for responsiveness
* Implement styled-system inside of ooni-components

## ooni-components 0.1.0-alpha.12 [2017-09-18]

Changed:

* Use SemiBold in place of Bold
* Use round buttons


## ooni-components 0.1.0-alpha.11 [2017-09-18]

Adds:

* Custom RadioButton label

## ooni-components 0.1.0-alpha.10 [2017-09-15]

Adds:

* Input[type='textarea']
* TwitterShareButton
* FacebookShareButton

## ooni-components 0.1.0-alpha.9 [2017-09-15]

Adds:

* FormWithLabel
* Button
* IconButton
* Radio
* Input
* InputWithIconButton
* Hero

## ooni-components 0.1.0-alpha.3 [2017-09-12]

Fixes:

* Include svgs via `babel-plugin-inline-react-svg`

## ooni-components 0.1.0-alpha.2 [2017-09-12]

Fixes:

* Include static files in build

## ooni-components 0.1.0-alpha.1 [2017-09-12]

Still work in progress

Adds:

* Basic color scheme
* Rebass theme
* Victory theme