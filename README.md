# React Mini Project

This repo contains the source code and documentation of this react mini project

## Getting started

### Prerequisites

- Git
- Node: any 8.x version starting with 8.4.0 or greater
- Yarn: See [How to install yarn](https://yarnpkg.com/lang/en/docs/install/)
- clone this repo [react-mini-project](https://github.com/constROD/react-mini-project) on your local machine

### Installation

- `cd react-mini-project` to go into the project root
- `yarn` to install the website's npm dependencies

### Firebase Key
For you to be able to have an access to the database you will need the following:
- Create project in firebase console [Create firebase project](https://console.firebase.google.com/u/0/).
- after that go to firebase console and look for `Project Setting` near `Project Overview`.
- go to `Service Account` and `Generate new private key` it will automatically download a .json file.
- rename it to `firebase-key.json` and place it in `\react-mini-project` folder.
- after that go back to firebase console and go to `General` and look for `Firebase SDK snippet` and click `Config`.
- get the firebase config and save it as `firebase-config.js` to `\react-mini-project` folder.

`firebase-config.js` will look like this
```javascript
module.exports = {
  apiKey: "some_keys",
  authDomain: "some_keys",
  databaseURL: "some_keys",
  projectId: "some_keys",
  storageBucket: "some_keys",
  messagingSenderId: "some_keys",
  appId: "some_keys",
  measurementId: "some_keys"
}
```

Note that this is for `testing purpose` 
- now lastly go back to firebase console go to `Databases` click `Realtime Databases`
- go to `Rules`
- set `read` and `write` to `true` then click `publish`
- and we're done.

### Running locally
- open two terminal to run seperately the api and the client.
- on the two terminal just `cd react-mini-project` to go into the project root
- `yarn client:start` to start the hot-reloading development server of client.
- `yarn api:start` to start the hot-reloading development server of api.
- `open http://localhost:3000` to open the site in your favorite browser
- note: that the default port in config of client is `3000` & for api is `3001`

### Build and run the app
- note that this app is set in `development` environment by default
- `yarn dev:deploy` to build api and client also to run the app bundle using `node`
- `yarn prod:deploy` to build api and client also to run the app bundle `pm2` [Read more](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)
- `yarn prod:restart` to build api and client and to restart the instance.
- note that this api and client is only 1 instance thats why this two app can run on the same port and the default is `3001`.

to set your own config just create a file `.env` and save it also in `\react-mini-project`
```env
APP_NAME=SAMPLE APP   \* Your app name or app title *\
APP_ZONE=development   \* Your zone either development or production *\
APP_PORT=3000   \* Your client port *\

API_PROTOCOL=http   \* Your api protocol either http or https *\
API_HOSTNAME=localhost   \* Your api hostname or domain name *\
API_PORT=3001   \* Your api port *\
```

### If you want to run this in Production Mode
- go to `\react-mini-project\src\api\server.js`
- input the path of your `SSL KEY`

```javascript
// ...some code

const server = {
    key: fs.readFileSync('SSL KEY PATH'),
    cert: fs.readFileSync('SSL CERT PATH'),
    ca: fs.readFileSync('SSL CA PATH')
  }
  
// ...end of some code
```

- and set your `APP_ZONE` to `production` in `.env` file.

```env
...some config

APP_ZONE=production   \* Your zone either development or production *\

...end some config
``` 

Thank you.
 
