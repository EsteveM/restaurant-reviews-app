# Restaurant Reviews App

This project is a fully browser-based implementation of an already existing restaurant reviews website. Initially, the code is not responsive, and it does not provide any standard accessibility features. In addition, it does not work offline. The goal of this project is to turn this website into one that provides responsiveness, accessibility, and that works offline via a service worker.

## Table of Contents

* [Description of the Project](#description-of-the-game)
* [Getting Started](#getting-started)
* [Contributing](#contributing)

## Description of the Project

The project is made up of three phases, which are described below:

### Provision of Responsiveness

 Several features have been added to the code so that it becomes responsive, and, as such, fully functional on a range of viewports. The main additions are:

 * A meta viewport has been added.
 * Flexbox has been used to create a a responsive grid-based layout to the list of restaurants. Restaurants will also wrap if necessary.
 * Media queries and relative units have been used. In particular, four breakpoints have been established: at 500, 750, 1000, and 1200 pixels.

### Provision of Accessibility

By the same token, a number of features have been included to the code so that it provides accessibility. The main ones are:

* Addition of the language in the HTML.
* The tab order of both the main page and the restaurant details page has been established by means of tabindex. This has been done at both HTML and JavaScript levels.
* Aria-label has been included at several points for accessibility purposes. In this way, a number of elements are labelled. In all these cases, there is no visible text label on the screen that conveys the intended meaning.
* Role has also been included where elements such as the map are implemented in such a way that their role is not clear for users of  assistive technologies.
* At several points, background color has been adjusted to improve contrast perception (contrast ratio).
* Elements which have focus have been clearly identified by means of a red border.
* Addition of the alt attribute for the restaurant images.

### Provision of Offline Functionality

Likewise, a number of features have been included so that visited app pages are accessible when the network condition is offline. The main additions have been:

* Registration of a service worker.
* At the install event, all necessary files are added to a cache once the installation is complete.
* At the fetch event, files are recovered from the cache, if they are there. Otherwise, they are obtained online, and, in this case, also added to the cache.

## Getting Started

This is a fully browser-based application, so you will only need a browser to run it. There are no external dependencies.

It is made up of a number of files. The main ones are:

* index.html: It contains the main page HTML code.
* restaurant.html: It contains the restaurant details page HTML code.
* css\style.css: It contains the application's CSS code.
* data\restaurants.json: It contains the application's data.
* js\main.js: It contains the main page JavaScript code. The service worker registration is also coded here.
* js\restaurant_info.js: It contains the restaurant details page JavaScript code.
* js\dbhelper.js: It contains common database helper functions.
* img\: It contains the application's images.
* sw.js: It contains the service worker's code.
* README.md: It contains the documentation file you are viewing right now.

The application can be started by simply running an HTTP server, such as the one provided with Python. If you have Python 2.x, just run `python -m SimpleHTTPServer 8000` in a terminal. For Python 3.x do run `python3 -m http.server 8000`. If you do not have Python, you can  download and install it from Python's [website](https://www.python.org/). After that, you only need to visit the app's site at `http://localhost:8000`.

It is also noteworthy that [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/) is used by the app.

## Contributing

This repository contains all the code that makes up the application. Individuals and I myself are encouraged to further improve this project. As a result, I will be more than happy to consider any pull requests.

Finally, it would be highly appreciated that any contributions used ES6, to the best of your ability, for modern web browser compatibility reasons.