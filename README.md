# Pokemon Trainer
## Table of contents
- [About](#about)
- [Description](#description)
  - [Login Screen](#login-screen)
  - [Navbar](#navbar)
  - [Catalogue Page](#catalogue-page)
  - [Pokemon Details Page](#pokemon-details-page)
  - [Trainer Page](#trainer-page)
- [Usage](#usage)
- [Generic Angular instructions](#generic-angular-instructions)

## About
The goal of this project was to create a Pokemon catalogue app using Angular 
and the [PokéAPI](https://pokeapi.co/).

The project uses [Bootstrap 5](https://getbootstrap.com/).

## Description
The app is a Pokemon catalogue where the user (called Trainer in the app) can
view and collect different Pokemon.

The app consists of the following main components:
- Login Screen
- Navbar
- Catalogue Page
- Pokemon Details Page
- Trainer Page

### Login Screen
This is the screen that the user is first presented with and also the only one
that can be accessed without logging in. The user must input a trainer name
and then click on the login button to advance to Pokemon Catalogue Page.
![login screen](https://github.com/mikkoluukko/pokemon-trainer/blob/master/readme-images/readme-image-1.png)

### Navbar
The Navbar is always displayed, however the navigation links and the logout
button are only displayed after the user has logged in. 

### Catalogue Page
This is the page where all the Pokemon cards are displayed. There are 18 cards
per page with navigation buttons for next and previous page at the bottom (when
there are next and/or previous pages available). The cards display an image of
a Pokemon, its name and its id. The cards are clickable and will redirect to
the specific Pokemon's details page when clicked.
![catalogue page](https://github.com/mikkoluukko/pokemon-trainer/blob/master/readme-images/readme-image-2.png)

### Pokemon Details Page
Each Pokemon has a details page where an alternative image of the Pokemon is 
displayed along with its details profile. The details profile was required to
be divided into three sections: Base Stats, Profile and Moves. Under the image
there is a button that the user can use to add the Pokemon to their collection
(or to remove the Pokemon from the collection if it has already been collected
before). Text "COLLECTED!" is pasted on top of the image if the Pokemon has 
been collected by the user.
![pokemon details page](https://github.com/mikkoluukko/pokemon-trainer/blob/master/readme-images/readme-image-3.png)

### Trainer Page
The trainer page displays cards of all the Pokemon that the user has collected
in a similar fashion as in the catalogue page.
![trainer page](https://github.com/mikkoluukko/pokemon-trainer/blob/master/readme-images/readme-image-4.png)

## Usage
The completed app can be used at [https://pokemon-trainer-mikkoluukko.vercel.app/](https://pokemon-trainer-mikkoluukko.vercel.app/)

## Generic Angular instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
