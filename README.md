# Tweeter Project

- [About](#about)
- [Features](#features)
- [Final Product](#final-product)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Development dependencies](#development-dependencies)
- [Getting Started](#getting-started)

Tweeter is a simple, single-page Twitter clone.

## Features

This mobile-friendly web application is a microblogging platform on which users can post short (up to 140 characters) messages known as "tweets".

All features as outlined in the project requirements are implemented, including **stretch components**:

- The navigation bar compose button toggles the hidden compose tweet box.
- The compose tweet box slides down and the text-area auto-focuses.
- The navigation bar compose button hides the tweet box using a slide-up animation on click, if the tweet box is showing.
- When a user scrolls down on the page, a second button appears in the lower right-hand corner.
- If the user clicks this button, they are brought back up to the top of the page.

## Final Product

### Scrolling on a narrow display

<img src="./docs/narrow_scroll_demo.gif" alt="Scrolling on a narrow display" width="350"/>

### Scrolling on a wide display

![[posting a new tweet and scrollong on a wide display]](./docs/wide_screen_new_tweet_scroll_demo.gif)

### Live on Heroku

[Live demo](http://vast-refuge-60230.herokuapp.com/) of the project.

## Dependencies

- Express
- Node 5.10.x or above
- body parser
- chance
- express
- md5

## Dev dependencies

- nodemon
- ESLint
- sass

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
