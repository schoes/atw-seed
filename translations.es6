const _ = require('lodash'),
    path = require('path'),
    fs = require('fs'),
    xlsx = require('node-xlsx'),
    colors = require('colors');

let translationsFile = './src/assets/translations/translations.xlsx';
let destinationFileName = path.dirname(translationsFile) + '\\translations.json';


function createTranslationObject(data) {
    let headers = data[0], result = {};
    for (let index = 1; index < headers.length; index++) {
        result[headers[index]] = {};
    }
    return result;


}
let dataObject = xlsx.parse(translationsFile);
_.forEach(dataObject, (worksheet)=> {
    console.log('reading data from worksheet', colors.blue(worksheet.name));
    let jsonTranslationObject = fs.readFileSync(destinationFileName) || createTranslationObject(worksheet.data);
    let headers = worksheet.data[0];
    let languages = _.keys(jsonTranslationObject);

    worksheet.data.shift();

    _.forEach(languages, (lang)=> {
        let foundIndex = _.findIndex(headers, (header)=> {
            return header === lang;
        });
        //excel line translation.key | lang1 | lang2 | lang3
        _.forEach(worksheet.data, (line)=> {
            jsonTranslationObject[lang][line[0]] = line[foundIndex];
        });
    });

    fs.writeFileSync(destinationFileName, JSON.stringify(jsonTranslationObject, null, 2));

});







