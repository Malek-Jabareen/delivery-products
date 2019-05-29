import MSBitProducts from '../apis/MSBitProducts';
import Product from "../components/Product/Product";

export const fetchProducts = () =>
    async (dispatch: any) => {
        const payload = await MSBitProducts.get('/deliveryProducts/products.json');
        dispatch({type: 'FETCH_PRODUCTS', payload});
    };

export const selectProduct = (product: Product) => {
    return {
        type: 'SELECT_PRODUCT',
        payload: product
    };
};

export const deleteProduct = (product: Product) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: product
    };
};

export const editProduct = (product: Product) => {
    return {
        type: 'EDIT_PRODUCT',
        payload: product
    };
};

export const changeOffset = (num: number) => {
    return {
        type: 'CHANGE_OFFSET',
        payload: num
    }
};

export const searchProducts = (substring: string) => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: substring
    }
};


export const sortProducts = (sort: string) => {
    return {
        type: 'SORT_PRODUCTS',
        payload: sort
    }
};

export const countPages = (num: number) => {
    return {
        type: 'COUNT_PAGES',
        payload: num
    }
};

export const changePage = (num: number) => {
    return {
        type: 'CHANGE_PAGE',
        payload: num
    }
};