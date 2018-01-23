export class checker {
    private errorMsg = {
      'require': "入力が空です",
      'min_length': "{$target}文字以上で入力して下さい",
      'max_length': "{$target}文字以下で入力して下さい",
      'mail_address': "メールアドレスを入力して下さい",
      'postal_code':"郵便番号を入力して下さい"
    };
  
    public msg:any[] = [];
  
    constructor(){
      this.msg = [];
    }
  
    public require = (input:string, param:{}): void => {
      if (input === ""){
        var msg = this.error_message("require");
        this.msg.push(msg);
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

    public mail_address = (input:string, param:{}): void =>{
      console.log("mail_address 実行");
      if (/^(?:(?:(?:(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+)(?:\.(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+))*)|(?:"(?:\\[^\r\n]|[^\\"])*")))\@(?:(?:(?:(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+)(?:\.(?:[a-zA-Z0-9_!#\$\%&'*+/=?\^`{}~|\-]+))*)|(?:\[(?:\\\S|[\x21-\x5a\x5e-\x7e])*\])))$/.test(input)===false){
        console.log("mail_address　エラー");
        var msg = this.error_message("mail_address");
        this.msg.push(msg);
      }
    }

    public postal_code = (input:string, param:{}): void =>{
      console.log("postal_code実行");
      if (/^\d{3}-\d{4}$/.test(input)===false){
        console.log("postal_code　エラー");
        var msg = this.error_message("postal_code");
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
      }else if(func_name==="mail_address"){
        msg = this.errorMsg.mail_address;
      }else if(func_name==="postal_code"){
        msg = this.errorMsg.postal_code;
      }
      
      return msg;
    }
  
    private msg_replace = (msg:string, replace:any): string =>{
      return msg.replace(/\{\$target\}/g, replace);
    }
  }