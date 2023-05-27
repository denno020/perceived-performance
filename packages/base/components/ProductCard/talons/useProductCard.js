import { useEffect, useRef } from 'react';
import { getItem } from "../../../util/get-item.js";
import { useAppContext } from '../../../contexts/AppContext';

export const useProductCard = (props) => {
    const { product } = props;
    const ref = useRef(null);
    const { preFetch } = useAppContext();
    
    useEffect(() => {
        if (!preFetch) return;

        const options = {
            threshold: 0.5 // half of item height
          }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        getItem(product.id, { useCache: true, isPreFetching: true });
                    }
                });
            },
            options
        );

        observer.observe(ref.current);
        
        return () => {
            observer.disconnect();
        }
    }, [preFetch])

    

    return {
        ...props,
        ref
    }
}