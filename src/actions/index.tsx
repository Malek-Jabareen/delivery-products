import MSBitProducts from '../apis/MSBitProducts';
import Product from "../components/Product/Product";

function productType(product: any) {
    if (product.fedex && product.type && product.type === 1) return 1;
    else if (product.ups && product.type && product.type === 2) return 2;
    return 3;
}

function createProduct(product: any): any {
    switch (productType(product)) {
        case 1: {
            return new Product(product.fedex.id, product.fedex.name, product.fedex.description, product.type, product.fedex.price, product.fedex.creationData, product.fedex.thumbnailUrl, product.fedex.url);
        }
        case 2: {
            let newProducts: Product [] = [];
            product.ups.forEach(function (product: any) {
                newProducts.push(new Product(product.id, product.name, product.description, product.type, product.price, product.creationData, product.thumbnailUrl, product.url));
            });
            return newProducts;
        }
        default : {
            return new Product(product.id, product.name, product.description, product.type, product.price, product.creationData, product.thumbnailUrl, product.url);
        }
    }
}

export const fetchProducts = () =>
    async (dispatch: any) => {
        let myProducts: Product [] = [];
        await MSBitProducts.get('/deliveryProducts/products.json ').then(function (response) {
            response.data.forEach(function (product: any) {
                let productsToPush: any = createProduct(product);
                if (typeof productsToPush.length == "undefined")
                    myProducts.push(productsToPush);
                else
                    myProducts.push(...productsToPush);
            });
        });
        dispatch({type: 'FETCH_PRODUCTS', payload: myProducts});
    };