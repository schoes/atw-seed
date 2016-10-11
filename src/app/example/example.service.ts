/**
 * Created by U112586 on 04.10.2016.
 */
import {Service} from "../../decorator";
export let moduleName = 'example.service'
@Service({
    module: moduleName,
    serviceName: 'exampleService'
})
export class ExampleService {

    public salutePerson(name: string): string {
        return 'Hello ' + name;
    }
}