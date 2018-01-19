import { validation } from "./validation"
import { observer } from "./observer"

const text:string = "";

Array.from(document.querySelectorAll("input"),  input => {
  let valid = new validation();
  let obsrv = new observer();

  if (input.required){
    obsrv.on(valid.require, {});
  }

  let min: any;
  if (min = input.getAttribute("data-minlength")){
    obsrv.on(valid.min_length, {min:min});
  }

  console.log("min:", min);

  let max: any;
  if (max = input.getAttribute("data-maxlength")){
    obsrv.on(valid.max_length, {max:max});
  }

  console.log("max:", max);

  obsrv.trigger(text);
  console.log(valid.msg);
});
