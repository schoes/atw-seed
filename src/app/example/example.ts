/**
 * Created by U112586 on 04.10.2016.
 */
import {moduleName as exampleComponent} from './example.component'
import {moduleName as exampleService} from './example.service'
import {moduleName as filter} from './example.filter';
import {exampleURLConfig} from "./example.config";

import * as angular from 'angular';

export let moduleName = 'example';


angular.module(moduleName, [
    exampleComponent,
    exampleService,
    filter
])
    .config(exampleURLConfig)
;