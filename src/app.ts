'use strict';

//   _   _                            _     ___ _____
//  | \ | |                          | |   |_  /  ___|
//  |  \| | ___  _ __ _ __ ___   __ _| |     | \ `--.
//  | . ` |/ _ \| '__| '_ ` _ \ / _` | |     | |`--. \
//  | |\  | (_) | |  | | | | | | (_| | | /\__/ /\__/ /
//  \_| \_/\___/|_|  |_| |_| |_|\__,_|_| \____/\____/
//
//
// must be executed in global scope to access later in angular
require('script!../node_modules/moment/min/moment-with-locales.min');
require('script!../node_modules/pikaday/pikaday');
require('script!../node_modules/tether/dist/js/tether.min');

//   _____ _         _           
//  /  ___| |       | |          
//  \ `--.| |_ _   _| | ___  ___ 
//   `--. \ __| | | | |/ _ \/ __|
//  /\__/ / |_| |_| | |  __/\__ \
//  \____/ \__|\__, |_|\___||___/
//              __/ |            
//             |___/                                  
require('./assets/fonts/mobi-font-realist/mobi-font-realist.css');
require('./assets/fonts/mobi-font-tisa/mobi-font-tisa.css');
require('../node_modules/pikaday/css/pikaday.css');
require('./assets/less/variables.less');
//                           _                  _                           _                 _
//                          | |                | |                         | |               (_)
//    __ _ _ __   __ _ _   _| | __ _ _ __    __| | ___ _ __   ___ _ __   __| | ___ _ __   ___ _  ___  ___
//   / _` | '_ \ / _` | | | | |/ _` | '__|  / _` |/ _ \ '_ \ / _ \ '_ \ / _` |/ _ \ '_ \ / __| |/ _ \/ __|
//  | (_| | | | | (_| | |_| | | (_| | |    | (_| |  __/ |_) |  __/ | | | (_| |  __/ | | | (__| |  __/\__ \
//   \__,_|_| |_|\__, |\__,_|_|\__,_|_|     \__,_|\___| .__/ \___|_| |_|\__,_|\___|_| |_|\___|_|\___||___/
//                __/ |                               | |
//               |___/                                |_|
require('angular');
require('angular-route');
require('angular-translate');
require('angular-hotkeys');
//                   _       _     _
//                  (_)     | |   | |
//  __   ____ _ _ __ _  __ _| |__ | | ___  ___
//  \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|
//   \ V / (_| | |  | | (_| | |_) | |  __/\__ \
//    \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
//
//
let appName = 'rwc3';
let ngRoute = 'ngRoute';
let ngTranslate = 'pascalprecht.translate';
let hotkeys = 'cfp.hotkeys';
//                   _           _         _                           _                 _
//                  (_)         | |       | |                         | |               (_)
//   _ __  _ __ ___  _  ___  ___| |_    __| | ___ _ __   ___ _ __   __| | ___ _ __   ___ _  ___  ___
//  | '_ \| '__/ _ \| |/ _ \/ __| __|  / _` |/ _ \ '_ \ / _ \ '_ \ / _` |/ _ \ '_ \ / __| |/ _ \/ __|
//  | |_) | | | (_) | |  __/ (__| |_  | (_| |  __/ |_) |  __/ | | | (_| |  __/ | | | (__| |  __/\__ \
//  | .__/|_|  \___/| |\___|\___|\__|  \__,_|\___| .__/ \___|_| |_|\__,_|\___|_| |_|\___|_|\___||___/
//  | |            _/ |                          | |
//  |_|           |__/                           |_|
require('./index.html');
require('./assets/images/favicon.ico');

import {moduleName as example} from './app/example/example';
import {appRootURLConfig} from "./config";


//   _                 _       _
//  | |               | |     | |                  
//  | |__   ___   ___ | |_ ___| |_ _ __ __ _ _ __  
//  | '_ \ / _ \ / _ \| __/ __| __| '__/ _` | '_ \ 
//  | |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |
//  |_.__/ \___/ \___/ \__|___/\__|_|  \__,_| .__/ 
//                                          | |    
//                                          |_|    
angular.module(appName, [
    hotkeys,
    ngRoute,
    ngTranslate,

    example
])

    .config(appRootURLConfig)
;

