# Stichting Ik Wil App by De Sigaar ![De Sigaar Logo](https://i.gyazo.com/2139de3348632e93be61757115a7e395.png)

[![Build and Deploy](https://github.com/DeSigaar/ikwil-app/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/DeSigaar/ikwil-app/actions?query=workflow%3A%22Build+and+Deploy%22)
[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fikwil-app.web.app%2F)](https://ikwil-app.web.app/)
[![Version](https://img.shields.io/github/package-json/v//DeSigaar/ikwil-app)](https://github.com/DeSigaar/ikwil-app)
[![Watchers](https://img.shields.io/github/watchers//DeSigaar/ikwil-app)](https://github.com/DeSigaar/ikwil-app/watchers)
[![Stars](https://img.shields.io/github/stars/DeSigaar/ikwil-app)](https://github.com/DeSigaar/ikwil-app/stargazers)
[![Issues](https://img.shields.io/github/issues//DeSigaar/ikwil-app)](https://github.com/DeSigaar/ikwil-app/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/DeSigaar/ikwil-app)](https://github.com/DeSigaar/ikwil-app/pulls)

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Clone](#clone)
  - [Setup](#setup)
  - [Running](#running)
- [Built with](#built-with)
  - [Techniques](#techniques)
  - [Packages](#packages)
- [Contributors](#contributors)

## About

This project was made by some students from the [Fontys Hogeschool ICT](https://fontys.nl/hbo-ict/) on behalf of ['Stichting Ik Wil'](http://www.stichtingikwil.nl/).
A live preview can be found on our [deployed firebase app](https://ikwil-app.web.app/).

## Prerequisites

- [Node.js](https://nodejs.org/)

## Installation

Make sure you have Node.js installed. If you are unsure if node is installed, run `$ node -v` within a terminal.

### Clone

Clone this repository to your local machine and move to the new folder.

```
$ git clone https://github.com/DeSigaar/ikwil-app.git
$ cd ikwil-app
```

### Setup

Install all needed node modules.

```
$ npm install
```

Create an enviroment variables file named `.env` in the root of the folder with the following variables:

```env
REACT_APP_firebase_apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_firebase_appId=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_firebase_authDomain=xxxxxxxxxx.firebaseapp.com
REACT_APP_firebase_databaseURL=https://xxxxxxxxxx.firebaseio.com
REACT_APP_firebase_measurementId=xxxxxxxxxxxx
REACT_APP_firebase_messagingSenderId=xxxxxxxxxxx
REACT_APP_firebase_projectId=xxxxxxxxxx
REACT_APP_firebase_storageBucket=xxxxxxxxxx.appspot.com
REACT_APP_firebase_vapid_public=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Running

Start the application on port 3000.

```
$ npm start
```

## Built with

### Techniques

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)

### Packages

- [React Redux Firebase](https://react-redux-firebase.com/)
- [Redux Firestore](https://github.com/prescottprue/redux-firestore)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [React Router](https://reacttraining.com/react-router/)
- [Connected React Router](https://github.com/supasate/connected-react-router)

## Contributors

- [Max Altena](https://github.com/MaxAltena)
- [Dylano Hartman](https://github.com/DylanoH)
- [Noël Herwig](https://github.com/Chiloz)
- [Timo van de Laar](https://github.com/BroodBalloon)

See the whole list of [contributors](https://github.com/DeSigaar/ikwil-app/contributors) who participated in this project.
