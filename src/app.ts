'use strict';

import * as angular from 'angular';
import * as ngRoute from 'angular-route';

require('angular-translate');

import {moduleName as example} from './app/example/example';
import {appRootURLConfig, languageConfig} from './config';

let appName = 'atw';
let ngTranslate = 'pascalprecht.translate';

require('./assets/images/favicon.ico');
require('./assets/sass/colors.scss');
require('./assets/translations/translations.json');


angular.module(appName, [
    ngRoute,
    ngTranslate,
    example
])

    .config(appRootURLConfig)
    .config(languageConfig)
;

