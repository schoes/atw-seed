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

interface IComponentOptions extends angular.IComponentOptions {
    module: string;
    /**
     * name of tag, such as vvn-component-name
     */
    selector: string;
}
export const Component = (options: IComponentOptions): Function => {

    return (controller: Function) => {
        let component: IComponentOptions = _.assign(options, {controller});
        if (typeof angular !== 'undefined') {
            _getModule(component.module)
                .component(getComponentNameFromSelector(component), component);
        }
        return controller;
    };

    function getComponentNameFromSelector(component: IComponentOptions): string {
        return _.camelCase(component.selector);
    }


};

interface IServiceOptions {
    module: string;
    serviceName: string;
}
export const Service = (options: IServiceOptions): Function => {
    return (service: Function) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
};

interface IFilterOptions {
    module: string;
    filterName: string;
}
export const Filter = (options: IFilterOptions): Function => {
    return (filter: Function): Function=> {
        let filterConstructor = function () {
            return filter().filter;
        };
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, filterConstructor);
        }
        return filterConstructor;
    };
};