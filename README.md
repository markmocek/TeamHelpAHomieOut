# HelpAHomieOut

## Requirements
In order to view API results a Google Chrome CORS extension is required. Without this extension an access error will be thrown and no data will be retrieved by the call.

Allow-Control-Allow-Origin: * offered by vitvad

## Deployment Link
https://markmocek.github.io/TeamHelpAHomieOut/

## Known BUGS
Login-Page: Users will be denied when entering their username/password on the first attempt. If username and password were entered correctly, simple pressing enter or the submit button a second time will log the user in.

# HelpAHomieOut Functions

## Main Page

The main page is where the user is sent after the login process. There the user will be able to enter parameters into a search bar that will query the Google Places API. The information taken from the API will then be displayed for the user.

## Login Page

The login page where users will login in as an existing user. Until logged in, user will be 'Please login' and have default information.

## Register Page

User can make a new account. Making a new account will prompt the user for information that will be stored in the Firebase database.

## User Profile Page

The user profile page will be able to be access through the main page of the application. Once there, the user will be given the information that is stored on them in the database.