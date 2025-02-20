import Product from "../Product/Product";

export interface IProps {
    changeOffset: (num: number) => void,
    deleteProduct: (product: Product) => void | null,
    fetchProducts: () => void | null,
    searchProducts: (substring: string) => void,
    sortProducts: (sortType: string) => void,
    selectProduct: (product: Product | null) => void | null,
    editProduct: (product: Product) => void | null,
    countPages: (num: number) => void | null,
    changePage: (num: number) => void | null,
    currentPage: number,
    products: Product [],
    selectedProduct: Product,
    pageLastY: number,
    searchKey: string,
    sortBy: string,
    lastPage: number
}
