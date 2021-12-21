import { atom } from 'recoil';

const productsAtom = atom({
    key: 'products',
    default: []
});
const productCategoryAtom = atom({
    key: 'productCategory',
    default: 1
});
const productAtom = atom({
    key: 'product',
    default: null
});

export {
    productsAtom,
    productAtom,
    productCategoryAtom
};
