import Product from "../components/Product/Product";

export default (state: Product [] = [], action: any): Product[] => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            let myProducts: Product [] = [];
            action.payload.data.forEach(function (product: any) {
                let productsToPush: any = createProduct(product);
                if (typeof productsToPush.length == "undefined")
                    myProducts.push(productsToPush);
                else
                    myProducts.push(...productsToPush);
            });
            return myProducts;
        case 'DELETE_PRODUCT':
            return state.filter((product: Product) => {
                return product.id !== action.payload.id
            });
        case 'EDIT_PRODUCT':
            return state.map((product: Product) => {
                return product.id === action.payload.id ? action.payload : product;
            });
        default:
            return state;
    }
};

function productType(product: any) {
    if (product.fedex && product.type && product.type === 1) return 1;
    else if (product.ups && product.type && product.type === 2) return 2;
    return 3;
}

function createProduct(product: any): any {
    switch (productType(product)) {
        case 1: {
            return new Product(product.fedex.id, product.fedex.name, product.fedex.description, product.fedex.price, product.fedex.creationData, product.fedex.thumbnailUrl, product.fedex.url);
        }
        case 2: {
            let newProducts: Product [] = [];
            product.ups.forEach(function (product: any) {
                newProducts.push(new Product(product.id, product.name, product.description, product.price, product.creationData, product.thumbnailUrl, product.url));
            });
            return newProducts;
        }
        default : {
            return new Product(product.id, product.name, product.description, product.price, product.creationData, product.thumbnailUrl, product.url);
        }
    }
}