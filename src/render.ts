export class render {
    private html = {
        'ul_open': "<ul class=\"errorMsg\">",
        'ul_close': "</ul>",
        'li_open': "<li>",
        'li_close': "</li>"
    };

    public errorMsg = (el:any, msg:any[]):void => {
        this.initialize(el);
        var htmlText:string = this.htmlCreate(msg);
        el.insertAdjacentHTML('afterend', htmlText);
    }

    private initialize = (el:any):void => {
        const nextElement = el.nextElementSibling;
        if (nextElement){
            console.log("className:", (nextElement as HTMLInputElement).className);
            if (nextElement.className==="errorMsg"){
                console.log("削除");
                nextElement.parentNode.removeChild(nextElement);
            }
        }
    }

    private htmlCreate = (msg:any[]):string => {
        let htmlText = this.html.ul_open;

        for(var i=0; i<msg.length; i++){
            htmlText += this.html.li_open + msg[i] + this.html.li_close;
        }

        htmlText += this.html.ul_close;
        return htmlText;
    }
}