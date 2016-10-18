const _ = require('lodash'),
    path = require('path'),
    fs = require('fs'),
    xlsx = require('node-xlsx');

let translationsFile = './src/assets/translations/translations.xlsx';
let translationPath = path.dirname(translationsFile);

let dataObject = xlsx.parse(translationsFile);

//merge content from excel into json files
dataObject.forEach(function (worksheet) {
    var fileName = translationPath + '\\' + worksheet.name.replace('|', '\\'),
        data = worksheet.data;
    var jsonTranslationObject = {
        'de': {},
        'fr': {},
        'it': {}
    };
    var actualJsonTranslationObject;

    //remove worksheet header line [key, de, fr, it]
    data.shift();

    fs.readFile(fileName, 'utf8', function (err, originalData) {
        var dirname;
        var languages = ['de', 'fr', 'it'];
        var jsonExcelDataLine = {};
        var translationObjectsList = [];

        //load original file (there might be additional keys)
        if (err && !originalData) {

            //create directory for json file; only 1 depth supported
            dirname = path.dirname(fileName);
            try {
                fs.mkdirSync(dirname);
                console.log('created new directory: ' + dirname);
            } catch (error) {
                console.log('directory already exists?, error:' + JSON.stringify(error));
            }
        } else {
            console.log('read file: ' + fileName);
            actualJsonTranslationObject = JSON.parse(originalData);
        }

        languages.forEach(function (language) {
            //process excel worksheet data, line by line
            data.forEach(function (line) {
                switch (language) {
                    case 'de':
                        jsonExcelDataLine[line[0]] = _createValue(line[1], 'DE: undefined');
                        break;
                    case 'fr':
                        jsonExcelDataLine[line[0]] = _createValue(line[2], 'FR: undefined');
                        break;
                    case 'it':
                        jsonExcelDataLine[line[0]] = _createValue(line[3], 'IT: undefined');
                        break;
                    default:
                        console.log('WARNING: language [' + language + '] not supported!');
                }
            });
            translationObjectsList.push(jsonExcelDataLine);
            jsonExcelDataLine = {};

            //merge processed excel translation with existing json translations 
            if (actualJsonTranslationObject) {
                switch (language) {
                    case 'de':
                        translationObjectsList[0] = _merge(language, translationObjectsList[0]);
                        break;
                    case 'fr':
                        translationObjectsList[1] = _merge(language, translationObjectsList[1]);
                        break;
                    case 'it':
                        translationObjectsList[2] = _merge(language, translationObjectsList[2]);
                        break;
                    default:
                        console.log('WARNING: language [' + language + '] not supported!');
                }
            }
        });

        jsonTranslationObject.de = translationObjectsList[0];
        jsonTranslationObject.fr = translationObjectsList[1];
        jsonTranslationObject.it = translationObjectsList[2];


        //write merged translations to JSON
        fs.writeFile(fileName, JSON.stringify(jsonTranslationObject, null, 2), function (err) {
            if (err) {
                console.error('error writing file: ' + fileName + '; error: ' + JSON.stringify(err));
            } else {
                console.log('saved file with merged data (excel+json): ' + fileName);
            }
        });

        function _merge(language, translationObjects) {
            var mergedTranslations = translationObjects;
            _.forEach(actualJsonTranslationObject[language], function (value, key) {
                if (!_.find(translationObjects, key)) {
                    mergedTranslations[key] = value;
                }
            });
            return mergedTranslations;
        }

        function _createValue(value, fallback) {
            return (value && value !== null && value !== 'undefined' ? value : fallback);
        }
    });

})
;

//write new excel from merged json files
setTimeout(function () {
    console.log('going to write excel');
    var finder,
        files = [];

    dataObject = [];
    finder = require('findit')(translationPath),
        finder.on('file', function (file, stat) {
            if (file.indexOf('.json') > 0) {
                files.push(file);
                console.log('added file to process later:' + file);
            }
        });

    finder.on('end', function () {
        files.forEach(function (file) {
            console.log('reading json file: ' + file);
            fs.readFile(file, 'utf8', function (err, data) {
                var object;
                var worksheetData = [];
                if (err) {
                    return console.log(err);
                }
                object = JSON.parse(data);

                //process translation-key
                for (language in object) {
                    worksheetData.push(_getTranslations(object, language));
                }
                dataObject.push(createWorksheet(file, worksheetData));
                console.log('created new worksheet for file: ' + file);
            });
        });

        function _getTranslations(object, language) {
            var jsonTranslations = {};
            for (translationKey in object[language]) {
                if (object[language].hasOwnProperty(translationKey)) {
                    var text = object[language][translationKey];
                    if (!jsonTranslations[translationKey]) {
                        jsonTranslations[translationKey] = text;
                    }
                }
            }
            return jsonTranslations;
        }

        setTimeout(function () {
            var excel = xlsx.build(dataObject);
            fs.writeFile(translationsFile, excel, function (err) {
                if (err) {
                    console.error('could not write excel; error: ' + JSON.stringify(err));
                } else {
                    console.log('excel written');
                }
            });
        }, 1000);
    });

    finder.on('error', function (err) {
        console.error('error occurred: ' + JSON.stringify(err));
    });

    function createWorksheet(file, translations) {
        console.log('create worksheet for:' + file);

        //backslash is not accepted as worksheet name
        var filename = file.replace('\\', '|'),
            data = [];

        data.push(['key', 'de', 'fr', 'it']);

        for (translationKey in translations[0]) {
            data.push([translationKey, translations[0][translationKey], translations[1][translationKey], translations[2][translationKey]]);
        }
        return {name: filename, data: data};
    }
}, 1000);






