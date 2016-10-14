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
* Open browser @ http://localhost:8080/webpack-dev-server

# Translations
The support for translations is also included in this seed
## Create translations
```bash
npm run translations
```
### Working with translations

For each JSON file a worksheet in Excel is created, while existing worksheets are already supplemented with new keys in JSON files. 
The translations from Excel are updated in the JSON-Files (the Excel is the master for translations).
The following directory and naming conventions must be followed:
* All JSON files are stored in a subfolder of 'translations'.
* All JSON files have the suffix .json
* The name of the JSON-Files may not include the character '|'
* Translations directly applied in Excel worksheets must have the name of the JSON-Files, with the prefix of the folder + '|', including: the Worksheet name 'test | test.json' leads to a JSON file named 'test.json 'directory' test '(with translations)
* Not translated texts in Excel to be replaced by the placeholder 'undefined'