/**
 * Created by U112586 on 04.10.2016.
 */
import {moduleName as component} from './example.component';
import {moduleName as service} from './example.service';
import {moduleName as filter} from './example.filter';
import {moduleName as config} from './example.config';

import * as angular from 'angular';

export let moduleName = 'example';


angular.module(moduleName, [
    component,
    service,
    filter,
    config
]);