export {baz} from './export_helper_2';
export let foo = 3;
export let bar = 3;

// TODO(evanm): this interface causes a compilation error in Closure
// due to sickle not yet transforming interfaces.
// export interface Bar { barField: number; }
// export var bar: Bar = null;
