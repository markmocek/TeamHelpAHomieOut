# HelpAHomieOut

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve --host $IP --port $PORT --disable-host-check` go to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# HelpAHomieOut Functions

## Login Page

User starts on the login page where they either login in as an existing user or make a new account. Making a new account will prompt the user for information that will be stored in the Firebase database.

## Main Page

The main page is where the user is sent after the login process. There the user will be able to enter parameters into a search bar that will query the Yelp API. The information taken from the API will then be displayed for the user.

## User Profile Page

The user profile page will be able to be access through the main page of the application. Once there, the user will be given the option to alter some of the information stored for them in the database.

## Google Places API Key
AIzaSyDmXV3an8X6kp1AHTuTIXjbS9LcgsInPJo

https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.6516,-121.7978&radius=20000&opennow&type=restaurant&keyword=pizza&key=AIzaSyDmXV3an8X6kp1AHTuTIXjbS9LcgsInPJo
## Deployment Link
https://helpahomieout-9414f.firebaseapp.com/login