import {useRecoilValue} from "recoil";
import {productsAtom} from "../recoil/state/products";
import {useProductActions} from "../recoil/actions/product.actions";
import {useEffect} from "react";
import Product from "./Product";

export const ListProduct = () => {

    const products = useRecoilValue(productsAtom);
    const productActions = useProductActions();

    useEffect(() => {
        productActions.getAll('1');
    } , [productActions]);


    return <>
        {products.map((product,index) => <Product {...product} commerce={'Muncher'}/> )}
    </>
}
