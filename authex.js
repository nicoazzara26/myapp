'use strict';

var readline = require('readline');
var google = require('googleapis');
var CLIENT_ID = '415039676127-vrsrldt2onghbneu6e25sk83kthp2glf.apps.googleusercontent.com';
var CLIENT_SECRET = '-6Y9cnljlHjCPjKEXWM2m1__';
var REDIRECT_URL = 'http://localhost:3000/subjects';

var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

var drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAccessToken (oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
    scope: 'https://www.googleapis.com/auth/drive' // can be a space-delimited string or an array of scopes
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function (code) {
    // request access token
    oauth2Client.getToken(code, function (err, tokens) {
      if (err) {
        return callback(err);
      }
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.setCredentials(tokens);
      callback();
    });
  });
}

// retrieve an access token
getAccessToken(oauth2Client, function () {
  // retrieve user profile
  plus.people.get({ userId: 'me', auth: oauth2Client }, function (err, profile) {
    if (err) {
      return console.log('An error occured', err);
    }
    console.log(profile.displayName, ':', profile.tagline);
  });
});
