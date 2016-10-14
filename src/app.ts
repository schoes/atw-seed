'use strict';

import * as angular from 'angular';
import * as ngRoute from 'angular-route';

require('angular-translate');

import {moduleName as example} from './app/example/example';
import {appRootURLConfig} from './config';

let appName = 'atw';
let ngTranslate = 'pascalprecht.translate';

// require('./index.html');
require('./assets/images/favicon.ico');
require('./assets/less/colors.less');


angular.module(appName, [
    ngRoute,
    ngTranslate,
    example
])

    .config(appRootURLConfig)
;

