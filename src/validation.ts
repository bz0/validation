import { checker } from "./checker"
import { observer } from "./observer"
import { render } from "./render"

export class validation{
  private config:{"query":string} = {
    "query": "input"
  };

  private chk: checker;
  private obsrv: observer;
  private r: render;

  constructor(config:any = {}){
    if (config['query']){
      this.config["query"] = config['query'];
    }

    this.chk = new checker();
    this.obsrv = new observer();
    this.r = new render();
  }

  public check = ():void =>{
    const inputAll = document.querySelectorAll(this.config.query);
    Array.from(inputAll,  input => {
      this.chk.msg = [];
      console.log("required:", input.getAttribute("required"));

      //未入力
      if (input.getAttribute("required")!==null){
        this.obsrv.on(this.chk.require, {});
      }

      //メルアド
      if (input.getAttribute("mail")!==null){
        this.obsrv.on(this.chk.mail_address, {});
      }

      //郵便番号
      if (input.getAttribute("postalcode")!==null){
        this.obsrv.on(this.chk.postal_code, {});
      }
    
      //最小文字数
      let min: any;
      if (min = input.getAttribute("data-minlength")){
        this.obsrv.on(this.chk.min_length, {min:min});
      }
    
      console.log("min:", min);
    
      //最大文字数
      let max: any;
      if (max = input.getAttribute("data-maxlength")){
        this.obsrv.on(this.chk.max_length, {max:max});
      }
    
      console.log("max:", max);
    
      this.obsrv.trigger((input as HTMLInputElement).value);
      console.log(this.chk.msg);
      this.r.errorMsg(input, this.chk.msg);
    });
  }
}


