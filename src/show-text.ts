export class ShowTextCustomElement {

    public textValue: string = "";

    public attached():Promise<any>
    {
        this.textValue = "loaded custom aurelia plugin!";
        return Promise.resolve();
    }

}