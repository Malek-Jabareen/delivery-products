import Product from "../Product/Product";

export interface IProps {
    selectProduct: (product: Product | null) => void | null,
    editProduct: (product: Product) => void | null,
    changeOffset: (num: number) => void,
    selectedProduct: Product,
    togglePopUp: (subject: string, content: string) => void
    pageLastY: number
}