export default class Product {
    constructor(private _id: number, private _name: string, private _description: string, private  _price: number, private _creationDate: Date, private _thumbnailUrl: string, private _url: string) {
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