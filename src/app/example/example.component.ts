/**
 * Created by U112586 on 04.10.2016.
 */
import {Component} from "../../decorator";
import {ExampleService} from "./example.service";

export let moduleName = 'example.component';

@Component({
    module: moduleName,
    selector: 'example-component',
    template: require('./example.tpl.html')
})
export class ExampleComponentCtrl {

    public name: string = 'Bill';
    public filterInput: number = 3;
    public salutation = this.exampleService.salutePerson(this.name);

    // the name of the Service must match the given service name in the @Service declaration --> then the service will be injectet with angular properly
    constructor(private exampleService: ExampleService) {

    }

}