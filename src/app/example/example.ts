/**
 * Created by U112586 on 04.10.2016.
 */
import {moduleName as component} from './example.component';
import {moduleName as sevice} from './example.service';
import {exampleURLConfig} from './example.config';

import * as angular from 'angular';

export let moduleName = 'example';


angular.module(moduleName, [
    component,
    sevice
])
    .config(exampleURLConfig);