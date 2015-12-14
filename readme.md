# WDI Radio Lab

## Setup

### API Setup

Fork and clone [this repo](https://github.com/ga-dc/wdi_radio_api). We'll be using a rails back end. It'll be a single model CRUD API for songs. Lets go into this directory and run all our initial rails setup and run our server.

```bash
$ cd wdi_radio_api
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rails s
```

This will be the backend we'll be using.

> What follows are not explicit steps. Just guidelines to approach building out this angular application.

### Angular Setup
- Create a main directory for your `wdi_radio` application.
- Create an `index.html` in your application's main directory.
- Create a skeleton for your content and include all dependencies.
- Create the main `app.js` file and create the module for this angular app.
- Create a module that defines songs.


## UI-Router & Resources/Factories
### User Stories
As a user, when we go to the app, we see a welcome page.
As a user, we should be able to see all of our songs in the database.
As a user, we should be able to see a single song page.

### Router
- Add a router to the `app.js`.
- Add a state for the routes `/welcome` and `/songs`.
- Create templates for these routes.

### Controller
- Create a controller file and define a controller to handle songs.

### Factory

- Create a factor for songs that point to the API we setup earlier.
- Remember to inject this dependency into the controller.

### Views
- Use directives in the html to list all songs
- Use directives in the html to view a single song(separate template)

### Bonus
- Implement full CRUD for songs
- Have the song show route be inside the index view.
  - Such that when you click a song, it renders somewhere in the index, bonus points on the bonus: get the song to play when you click on it.
