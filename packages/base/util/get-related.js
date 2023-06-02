import { loadRelatedProducts } from './products';

export const getRelated = (productId) => {
    return new Promise((res) => {
        setTimeout(() => {
            const related = loadRelatedProducts();
            res(related);
        }, 500)
    })
}