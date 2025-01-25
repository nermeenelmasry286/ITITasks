export class exitdocument{
    constructor(header,footer,page,text){
        this.header=header;
        this.footer=footer;
        this.page=page;
        this.text=text;

    }
    getDetails(){
        return `header :${this.header}, footer :${this.footer}, page :${this.page}, text :${this.text}`
    }
}