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
}