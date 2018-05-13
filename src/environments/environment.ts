// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBoFObH4FDPs7XhPzegnUEMqYz1dN1Bbl0',
    authDomain: 'helpahomieout-9414f.firebaseapp.com',
    databaseURL: 'https://helpahomieout-9414f.firebaseio.com',
    projectId: 'helpahomieout-9414f',
    storageBucket: '',
    messagingSenderId: '466897444830'
  },
  googlePlaces: {
    key: '&key=AIzaSyDmXV3an8X6kp1AHTuTIXjbS9LcgsInPJo',
    urlBase: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + 'location=36.6516,-121.7978&radius=20000&opennow&type=restaurant&keyword='
  }
};
