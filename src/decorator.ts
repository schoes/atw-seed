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

    return (controller: Function): Function=> {
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
    return (service: Function): Function=> {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
};

interface FilterOptions {
    module: string;
    filterName: string;
}
export const Filter = (options: FilterOptions): Function => {
    return (filter: Function): Function=> {
        let filterConstructor = (): Function => {
            return filter().filter;
        };
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, filterConstructor);
        }
        return filterConstructor;
    };
};

interface ConfigOptions {
    module: string;
}

export const Config = (options: ConfigOptions): Function => {
    return (config: Function): Function => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .config(config);
        }
        return config;
    };
};
