export class Mobile {
    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:number;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

    constructor (name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    public getName():string {
        return this.name;
    }
    public getModel():string {
        return this.model;
    }
    public getTrademark():string {
        return this.trademark;
    }
    public getsdSize():number {
        return this.sdSize;
    }
    public getColor():string {
        return this.color;
    }
    public getis5G():boolean {
        return this.is5G;
    }
    public getCameraNumber():number {
        return this.cameraNumber;
    }
    public getPrice():number {
        return this.price;
    }
    public setName(name:string) {
        this.name = name;
    }
    public setModel(model:string) {
        this.model = model;
    }
    public setTrademark(trademark:string) {
        this.trademark = trademark;
    }
    public setsdSize(sdSize:number) {
        this.sdSize = sdSize;
    }
    public setColor(color:string) {
        this.color = color;
    }

    public setis5G(is5G:boolean) {
        this.is5G = is5G;
    }
    public setCameraNumber(cameraNumber:number) {
        this.cameraNumber = cameraNumber;
    }
    public setPrice(price:number) {
        this.price = price;
    }
}