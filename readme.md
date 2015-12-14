# WDI Radio Lab

// Get backend setup, look at API endpoint
## Setup

Fork and clone [this repo](https://github.com/ga-dc/wdi_radio_api). We'll be using a rails back end. It'll be a single model CRUD API for songs. Lets go into this directory and run all our initial rails setup and run our server.

```bash
$ cd wdi_radio_api
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rails s
```

## UI-Router & Resources/Factories
### User Stories
As a user, when we go to the app, we see a welcome page.
As a user, we should be able to see all of our songs

### Root Route
- require libraries
- define main `app.js`
- add `ng-app`
- add a `data-ui-view`
- create main app module, inject `ui.router`
- inject `songs` in main `app.js`
- configure module with $stateProvider and a callback define call back with routes
  - have a route to the root path of the app to be a welcome page

> If we create a new file, make sure you add that dependency to the main `index.html`

### songs
- define a state(route) songs
- add link to songs route in the header of the application
- creates songs directory
- create and define `songs.module.js`


- create `js/songs/index.html` template
- load angular resource cdn
- create `js/songs/song.factory.js`
  - inject `$resource` and add callback
  - use `$resource` to return an API call

- create `js/songs/index.controller.js`
  - inject factory dependency
  - query for songs in the controller function
  - in `app.js` add controller and controller as
  - add ng-repeat to `js/songs/index.html` to display songs

### Bonus
