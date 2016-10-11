/**
 * Created by U112586 on 04.10.2016.
 */
export let appRootURLConfig = ($routeProvider: angular.route.IRouteProvider)=> {
    $routeProvider.when('/', {
        redirectTo: ()=> {
            return '/example';
        }
    });
};