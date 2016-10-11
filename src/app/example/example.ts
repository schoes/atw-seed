/**
 * Created by U112586 on 04.10.2016.
 */
import {moduleName as exampleComponent} from './example.component'
import {moduleName as exampleService} from './example.service'
import {exampleURLConfig} from "./example.config";

export let moduleName = 'example';


angular.module(moduleName, [
    exampleComponent,
    exampleService
])
    .config(exampleURLConfig)
;