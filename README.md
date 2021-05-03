# Wine trading app server

This is the server of the wine trading app I developed for the Italian market, the app is still work in progress.

## Technology used

This app is written in nodeJs using TypeScript, and I decided to use mongoDB as a database.
This is my first project using GraphQL over REST and I use ApolloServer.

## Features

- Users can register (a mail is sent to verify email address)
- Users can post/update Ads
- Users can open/close Negotiations
- Users can review other Users
- Users can send real time messages
- Automatic mails after certain actions (ie. when opening or closing a negotiation)
- Admin can add or remove wines

## What is missing

The mail server is using a fake service (ethereal) and now the test coverage is 80%, it can improve.
The CI/CD pipeline is also missing.
