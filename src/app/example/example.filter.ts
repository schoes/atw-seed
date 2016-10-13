import {Filter} from "../../decorator";

export let moduleName = 'example.filter';
/**
 * Created by U112586 on 13.10.2016.
 */
@Filter({
    filterName: 'exampleFilter',
    module: moduleName
})
export class ExampleFilter {
    public filter = (filterInput: number): string=> {
        return 'filtered' + filterInput;
    }
}


