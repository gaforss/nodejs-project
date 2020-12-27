# Lead Gen Web App

I built a nodejs sales prospecting web app that incorporates the ability to login through Auth0 using social SSO login connections and allows for users that are logged into to enter into a CRM dashboard that will inrtoduce a list of leads, the ability to export the leads via CSV or Excel and also allows for a chrome browser plugin that can scrape user data via the sites where I have built the connections.

## Running the Web App

If you don't yet have an Auth0 account, [sign up](https://auth0.com/signup) for free. This will allow you to create your own web app instance and define your settings within your private instance.

While using the command terminal and within the main directory of your file folder structure, install the following dependencies with npm:

```bash
npm init
npm install express, dotenv, http, morgan, path, express-openid-connect
```

Follow the instructions within Auth0 to link your connections and to also setup a database to host the user data

Run the app:

```bash
node server.js
```

The app will be served at `localhost:3000`.
