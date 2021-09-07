# Wine trading app server

The app connects wineries in need to sell or buy bulk wine, choosing between more than 4000 Italian wines.
The user can post an ad, and if there is already a wine listed that matches the parameters, the user can send a message to the seller/buyer.
The ads, messages, negotiations and reviews can be filtered, sorted and there is pagination.
When a user signs up I save their geographic coordinates using a third party API to provide another way to sort data.
The app sends a notification and a mail when a new wine is posted that matches the user's active ad, users can chat in real-time, leave reviews and manage active negotiations and posted ads.

## Technology used

This app is written in NodeJs using TypeScript, and I decided to use mongoDB/mongoose as a database.
I'm using a datasource layer between the models and the resolvers, apollo-datasource-mongodb, in order to have the freedom to change the DB in the future and don't touch the resolvers, it's also helpful for the n+1 problem.
This is my first project using GraphQL over REST and I used ApolloServer.
I used a cronjob to send emails to don't let the server hang for a better user experience, it retries 2 times.
The mongoose typing was done manually but I changed it to mongoose-tsgen, the graphQL typing is done with graphql-codegen.
There is offset pagination support for performance and for the client to implement infinite scroll.
The app is tested using jest and apollo-server-testing.

## Features

- Users can register (a mail is sent to verify email address)
- Users can post/update Ads
- Users can open/close Negotiations
- Users can review other Users
- Users can send real time messages
- Users can save Ads
- Automatic mail and notification after certain actions (ie. when opening or closing a negotiation)
- Admin can add or remove wines (work in progress)
- Mail and notification sent when someone likes your ad
- Geolocalisation to sort ads result (work in progress, now is sort by time or price)

## What is missing

The mail server is using a fake service (ethereal) and now the test coverage is 80%, it can improve.
The CI/CD pipeline is also missing.

## Installation

In the project directory, you can run:

### `npm run dev`

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
