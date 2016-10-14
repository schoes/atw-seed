import * as _ from 'lodash';
import * as angular from 'angular';


function _getModule(moduleName: string): angular.IModule {
    let module: angular.IModule;
    try {
        module = angular.module(moduleName);
    } catch (err) {
        module = angular.module(moduleName, []);
    }
    return module;
}

interface ComponentOptions extends angular.IComponentOptions {
    module: string;
    /**
     * name of tag, such as vvn-component-name
     */
    selector: string;
}
export const Component = (options: ComponentOptions): Function => {

    return (controller: Function) => {
        let component: ComponentOptions = _.assign(options, {controller});
        if (typeof angular !== 'undefined') {
            _getModule(component.module)
                .component(getComponentNameFromSelector(component), component);
        }
        return controller;
    };

    function getComponentNameFromSelector(component: ComponentOptions): string {
        return _.camelCase(component.selector);
    }


};

interface ServiceOptions {
    module: string;
    serviceName: string;
}
export const Service = (options: ServiceOptions): Function => {
    return (service: Function) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
};