import { useSetRecoilState } from 'recoil';
import {useFetchWrapper} from "../../helper/fetchWrapper";
import {categoriesAtom} from "../state/category";
export { useCategoryActions };

function useCategoryActions () {
    const baseUrl = `${process.env.REACT_APP_API_URL}/categories/user`;
    const fetchWrapper = useFetchWrapper();
    const setCategories = useSetRecoilState(categoriesAtom);
    return {
        getAll
    }
    function getAll(commerce : string) {
        return fetchWrapper.get(`${baseUrl}/${commerce}`).then(setCategories);
    }
}
