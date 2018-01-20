export class checker {
    private errorMsg = {
      'require': "入力が空です",
      'min_length': "{$target}文字以上で入力して下さい",
      'max_length': "{$target}文字以下で入力して下さい"
    };
  
    public msg:any[] = [];
  
    constructor(){
      this.msg = [];
    }
  
    public require = (input:string, param:{}): void => {
      if (input === ""){
        this.msg.push(this.error_message("require"));
      }
    }
  
    public min_length = (input:string, param:{min:number}): void => {
      if (input.length < param.min){
        var msg = this.error_message("min_length");
        msg = this.msg_replace(msg, param.min);
        this.msg.push(msg);
      }
    }
  
    public max_length = (input:string, param:{max:number}): void =>{
      if (input.length > param.max){
        var msg = this.error_message("max_length");
        msg = this.msg_replace(msg, param.max);
        this.msg.push(msg);
      }
    }
    
    public error_message = (func_name: string): string =>{
      var msg:string = "";
      if (func_name==="require"){
        msg = this.errorMsg.require;
      }else if(func_name==="min_length"){
        msg = this.errorMsg.min_length;
      }else if(func_name==="max_length"){
        msg = this.errorMsg.max_length;
      }
      
      return msg;
    }
  
    private msg_replace = (msg:string, replace:any): string =>{
      return msg.replace(/\{\$target\}/g, replace);
    }
  }