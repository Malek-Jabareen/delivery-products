import Product from "../Product/Product";

export interface IProps {
    selectedProduct: Product,
    products: Product [],
    searchKey: string,
    sortBy: string,
    togglePopUp: (subject: string, content: string) => void,
    deleteProduct: (product: Product) => void | null,
    changeOffset: (num: number) => void,
    selectProduct: (product: Product | null) => void | null,
    setLastPage: (product: Product []) => void,
    changePage: (num: number) => void | null,
    countPages: (num: number) => void | null,
    currentPage: number,
    lastPage: number,
    pageLastY: number
}