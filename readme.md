# WDI Radio

## Requirements

- The app should have a welcome page at the root path
- The "/songs" path should be an index of songs in the database.
- **Bonus**: CRUD functionality for songs
- **Bonus**: Add ability to play a song (see details below)

## Setup

- Create two repos: `wdi-radio-server` and `wdi-radio-client`
- To submit, you will create an issue on this repo with links to both repos.
    - Issue should also (as always) include levels of **comfort** and **completion** as well as any specific questions you would like answered by your reviewing instructor.
    - If you would like to create the issue immediately after creating the repos that is fine but come back to add comfort, completion, and questions (click the pencil in the corner of your issue to edit it).

> What follows are not explicit steps. Just guidelines to approach building out this Angular application.

### Rails Setup
- **Inside** of `wdi-radio-server`, run `rails new -d postgresql .` to create a new rails app for your back end
- Set up a model and run a migration for songs
- Write seed data to create instances of songs
- Define a controller for songs that has at least an `index` method that **renders
JSON** for all songs in your database

### Angular Setup

- Inside of `wdi-radio-client`, create an `index.html`
- Make sure to load in any appropriate libraries via CDNs
- Create a `js` directory to store all of your Javascript files
- Create the main `app.js` file and define the module for the angular app
- Bootstrap the newly defined module in `index.html`

### Initialize a Router

- Add `ui.router` as a dependency and configure your app's routing in `app.js`
- Add a state for the routes `/` and `/songs`
- Create templates for these routes

## Set Up Resources
- Add `ngResource` as a dependency and set up a factory to retrieve data from your
 Rails API running on  `localhost`

### Define a Controller

- Define a controller to handle songs
- Access the data from your songs factory and save it as a property on the controller

### Build Views

- Use data attached to your view model to display a list of all songs

### Bonus I: Full CRUD Songs

- Implement full CRUD for Songs

### Bonus II: Custom Player Directive

Implement a "player" using an Angular [custom directive](https://github.com/ga-wdi-lessons/angular-directives)

- When you click a song, a player view renders somewhere in the index
- Get the song to play
- Some options for the song player...
  - [Soundcloud embed](http://shareandembed.help.soundcloud.com/customer/portal/articles/2167182-embedding-a-track-or-playlist-on-wordpress)
  - [Spotify embed](https://developer.spotify.com/technologies/widgets/spotify-play-button/)
  - Stream a local audio file using the HTML `<audio>` tag

> If you finish this bonus, look into how you could integrate [Spotify's API](https://developer.spotify.com/web-api/) or [iTunes' API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) into your WDI Radio app.
