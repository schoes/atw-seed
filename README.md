# ATW Seed
## Angular/Typescript/webpack Seed

# Installation
```bash
npm install -g typescript webpack typings conventional-changelog-cli
npm install
```
* Typings breaking changes upgrade to Typings 1.0 [readme.md](https://github.com/typings/typings/blob/master/README.md)
* Typescript 2.0 [release Notes](http://www.typescriptlang.org/docs/release-notes/typescript-2.0.html)

# Startup
```bash
npm start <environment>// Starts the super cool custom dev-server(.js) for the environment (default:local) check out ./config/proxy.config.js for more information

npm test // Starts the Karma in watch mode to execute the tests

```
* Open browser @ http://localhost:8000/app

# Translations
## Create translations
The Script is under src/assets/translations
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