import * as _ from 'lodash';
/**
 * Created by U112586 on 04.10.2016.
 */
export let appRootURLConfig = ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider.when('/', {
        redirectTo: () => {
            return '/example';
        }
    });
};

// This is the initialization of the supported languages
export let languageConfig = ($translateProvider: any) => {
    let translationTable = require('./assets/translations/translations.json');
    $translateProvider.useSanitizeValueStrategy('escape');

    $translateProvider.translations('de', translationTable.de);
    $translateProvider.translations('fr', translationTable.fr);
    $translateProvider.translations('it', translationTable.it);

    $translateProvider.determinePreferredLanguage(() => {
        let supportedLang = ['de', 'fr', 'it'];
        let browserLang = window.navigator.language.substring(0, 2);
        let lang: string;
        lang = _.includes(supportedLang, browserLang) ? browserLang : 'de';
        lang = _.lowerCase(lang);
        return lang;
    });
};