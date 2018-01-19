export class observer{
  private listeners:any[] = [];
  private errorMsg:any[] = [];

  constructor(){
    this.listeners = [];
    this.errorMsg = [];
  }

  public on = (func:any, param:any): void => {
    this.listeners.push({'func': func, 'param': param});
  }

  public trigger = (input:string): any[] => {
    for(var i=0; i<this.listeners.length; i++){
      this.listeners[i]['func'](input, this.listeners[i]['param']);
    }
    this.listeners = [];

    return this.errorMsg;
  }
}