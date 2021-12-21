import { useSetRecoilState } from 'recoil';
import {productCategoryAtom, productsAtom} from "../state/products";
import {useFetchWrapper} from "../../helper/fetchWrapper";

export { useProductActions };

function useProductActions () {
    const baseUrl = `${process.env.REACT_APP_API_URL}/products`;
    const fetchWrapper = useFetchWrapper();
    const setProducts = useSetRecoilState(productsAtom);
    const setCategoryFocus = useSetRecoilState(productCategoryAtom);
    return {
        getAll
    }
    function getAll(category : string) {
        setCategoryFocus(category);
        return fetchWrapper.get(`${baseUrl}/menu/${category}?include=productVariants:enabled(1)`).then(setProducts);
    }
}
