import {ExampleService} from "../../src/app/example/example.service";
/**
 * Created by svenschoeni on 11.10.16.
 */
let service = new ExampleService();
describe('ExampleService ==>', ()=> {
    describe('salutePerson ==>', ()=> {
            it('should salute the person', ()=> {
                let salutation = service.salutePerson('Bill');
                expect(salutation).toBe('Hello Bill');
            })
        }
    );
});