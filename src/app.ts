'use strict';

import * as angular from 'angular';
import * as ngRoute from 'angular-route';
require('angular-translate');
require('angular-hotkeys');

let appName = 'atw';
let ngTranslate = 'pascalprecht.translate';
let hotkeys = 'cfp.hotkeys';

require('./index.html');
require('./assets/images/favicon.ico');
require('./assets/less/colors.less')

import {moduleName as example} from './app/example/example';
import {appRootURLConfig} from "./config";

angular.module(appName, [
    hotkeys,
    ngRoute,
    ngTranslate,
    example
])

    .config(appRootURLConfig)
;

