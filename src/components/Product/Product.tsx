export default class Product {
    constructor(private _id: number, private _name: string, private _description: string, private  _price: number, private _creationDate: Date, private _thumbnailUrl: string, private _url: string) {
        this.id = _id;
        this.name = _name;
        this.description = _description;
        this.price = _price <= 0 ? 1 : _price;
        this.creationDate = _creationDate < new Date() ? _creationDate : new Date();
        this.thumbnailUrl = _thumbnailUrl;
        this.url = _url;
    }

    set id(value: number) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set price(value: number) {
        this._price = value;
    }

    set creationDate(value: Date) {
        this._creationDate = value;
    }

    set thumbnailUrl(value: string) {
        this._thumbnailUrl = value;
    }

    set url(value: string) {
        this._url = value;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    get thumbnailUrl(): string {
        return this._thumbnailUrl;
    }

    get url(): string {
        return this._url;
    }
}