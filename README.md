# Wine trading app server

App that connects wineries in need to sell or buy bulk wine, choosing between more than 4000 Italian wines.
The user can post an ad, and if there is already a wine listed that matches the parameters, the user can send a message to the seller/buyer.
The app sends a notification and a mail when a new wine is posted that matches the user's active ad, users can chat in real-time, leave reviews and manage active negotiations and posted ads.

## Technology used

This app is written in NodeJs using TypeScript, and I decided to use mongoDB as a database.
This is my first project using GraphQL over REST and I used ApolloServer.

## Features

- Users can register (a mail is sent to verify email address)
- Users can post/update Ads
- Users can open/close Negotiations
- Users can review other Users
- Users can send real time messages
- Automatic mail and notification after certain actions (ie. when opening or closing a negotiation)
- Admin can add or remove wines (work in progress)

## What is missing

The mail server is using a fake service (ethereal) and now the test coverage is 80%, it can improve.
The CI/CD pipeline is also missing.

## Installation

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.<br />
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to open the graphQL playground.

The server will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.<br />

### `npm run tsc`

Compiles the app from TypeScript to JavaScript in the `build` folder.<br />

### `npm start`

Runs the compiled version of the app.<br />
