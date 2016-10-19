# aTw seed
Seed to create an angular app with Typescript 2 and webpack
## Why do I need this seed
It helps you to jump start an angular application based on Typescript and webpack without loosing your hair :-)

# Installation
```bash
npm install -g typescript webpack typings conventional-changelog-cli
npm install
```
# Startup
```bash
npm start // starts your app with webpack-dev-server

npm test // Starts the Karma in watch mode to execute the tests

```
* Open browser @ http://localhost:8080/

# Translations
The support for translations is also included in this seed
## Create translations
```bash
npm run translations
```
### Working with translations

* you can create a new worksheet inside your excel sheet
* give your sheet a name
* the first line must have the following structure : key | lang1 | lang2 | lang3
```
Example app.title | The App Title | Der Applikationstitel | Le titrle d'application
```
* view the examples in the translations.xlsx
