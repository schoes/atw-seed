import {Config} from '../../decorator';
/**
 * Created by U112586 on 04.10.2016.
 */
export let moduleName = 'example.config';
@Config({
    module: moduleName
})
export class ExampleConfig {
    constructor(private $routeProvider: angular.route.IRouteProvider) {
        this.$routeProvider.when('/example', {
            template: '<example-component></example-component>'
        });
    }
}