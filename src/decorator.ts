import _ = require('lodash');
import IServiceProvider = angular.IServiceProvider;
interface IComponentOptions extends angular.IComponentOptions {
    module: string;
    /**
     * name of tag, such as vvn-component-name
     */
    selector: string;
}
export const Component = (options: IComponentOptions): Function => {

    return (controller: Function) => {
        let component: IComponentOptions = _.assign<IComponentOptions, angular.IComponentOptions, IComponentOptions>(options, {controller});
        if (typeof angular !== 'undefined') {
            getModule(component.module)
                .component(getComponentNameFromSelector(component), component);
        }
        return controller;
    };

    function getComponentNameFromSelector(component: IComponentOptions): string {
        return _.camelCase(component.selector);
    }

    function getModule(moduleName: string): angular.IModule {
        let module: angular.IModule;
        try {
            module = angular.module(moduleName);
        } catch (err) {
            module = angular.module(moduleName, []);
        }
        return module;
    }
};

interface IServiceOptions {
    module: string;
    serviceName: string;
}
export const Service = (options: IServiceOptions): Function => {
    return (service: Function) => {
        if (typeof angular !== 'undefined') {
            getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };

    function getModule(moduleName: string): angular.IModule {
        let module: angular.IModule;
        try {
            module = angular.module(moduleName);
        } catch (err) {
            module = angular.module(moduleName, []);
        }
        return module;
    }
};

interface IFilterOptions {
    module: string;
    filterName: string;
}

export const Filter = (options: IFilterOptions): Function => {
    return (filter: Function) => {
        if (typeof angular !== 'undefined') {
            getModule(options.module)
                .filter(options.filterName, filter);
        }
        return filter;
    };

    function getModule(moduleName: string): angular.IModule {
        let module: angular.IModule;
        try {
            module = angular.module(moduleName);
        } catch (err) {
            module = angular.module(moduleName, []);
        }
        return module;
    }
};