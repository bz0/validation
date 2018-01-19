import { validation } from "./validation"
import { observer } from "./observer"

const valid = new validation();
const input:string = "";

const obsrv = new observer();
obsrv.on(valid.require, {});
obsrv.on(valid.min_length, {min:2});
obsrv.on(valid.max_length, {max:10});
obsrv.trigger(input);

console.log(valid.msg);