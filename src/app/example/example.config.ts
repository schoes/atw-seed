/**
 * Created by U112586 on 04.10.2016.
 */
export let exampleURLConfig = ($routeProvider: angular.route.IRouteProvider)=> {
    $routeProvider.when('/example', {
        template: '<example-component></example-component>'
    });
};