import Product from "./Product";

export interface IProps {
    deleteProduct: (product: Product) => void | null,
    selectProduct: (product: Product | null) => void | null,
    changeOffset: (num: number) => void
    product: Product,
    togglePopUp: (subject: string, content: string) => void,
    showProductDetails: (e: any, product: Product) => void,
    isProductSelected: (product:Product) => boolean,
}